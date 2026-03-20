import { betterAuth } from 'better-auth';
import { drizzleAdapter } from 'better-auth/adapters/drizzle';
import { admin } from 'better-auth/plugins';
import { drizzle } from 'drizzle-orm/d1';
import * as schema from './db/schema';

/**
 * PBKDF2-based password hashing using Web Crypto API.
 * Workers-compatible: hardware-accelerated, no CPU limit issues.
 */
async function hashPassword(password: string): Promise<string> {
	const salt = crypto.getRandomValues(new Uint8Array(16));
	const key = await crypto.subtle.importKey(
		'raw',
		new TextEncoder().encode(password),
		'PBKDF2',
		false,
		['deriveBits']
	);
	const derived = await crypto.subtle.deriveBits(
		{ name: 'PBKDF2', salt, iterations: 100000, hash: 'SHA-256' },
		key,
		256
	);
	const saltHex = [...salt].map((b) => b.toString(16).padStart(2, '0')).join('');
	const hashHex = [...new Uint8Array(derived)]
		.map((b) => b.toString(16).padStart(2, '0'))
		.join('');
	return `pbkdf2:${saltHex}:${hashHex}`;
}

async function verifyPassword(data: { hash: string; password: string }): Promise<boolean> {
	const { hash, password } = data;

	// Handle legacy scrypt hashes (salt:key format without prefix)
	if (!hash.startsWith('pbkdf2:')) {
		// Legacy scrypt hash — try importing better-auth's verifier
		try {
			const { verifyPassword: scryptVerify } = await import('better-auth/crypto');
			return await scryptVerify(data);
		} catch {
			return false;
		}
	}

	const [, saltHex, storedHashHex] = hash.split(':');
	const salt = new Uint8Array(saltHex.match(/.{2}/g)!.map((b) => parseInt(b, 16)));
	const key = await crypto.subtle.importKey(
		'raw',
		new TextEncoder().encode(password),
		'PBKDF2',
		false,
		['deriveBits']
	);
	const derived = await crypto.subtle.deriveBits(
		{ name: 'PBKDF2', salt, iterations: 100000, hash: 'SHA-256' },
		key,
		256
	);
	const derivedHex = [...new Uint8Array(derived)]
		.map((b) => b.toString(16).padStart(2, '0'))
		.join('');
	return derivedHex === storedHashHex;
}

export function createAuth(d1: D1Database) {
	const db = drizzle(d1, { schema });

	return betterAuth({
		database: drizzleAdapter(db, {
			provider: 'sqlite',
			schema
		}),
		emailAndPassword: {
			enabled: true,
			disableSignUp: true,
			password: {
				hash: hashPassword,
				verify: verifyPassword
			}
		},
		plugins: [
			admin({
				defaultRole: 'user',
				adminRoles: ['admin']
			})
		]
	});
}

export type Auth = ReturnType<typeof createAuth>;

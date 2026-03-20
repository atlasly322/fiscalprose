import { betterAuth } from 'better-auth';
import { drizzleAdapter } from 'better-auth/adapters/drizzle';
import { admin } from 'better-auth/plugins';
import { drizzle } from 'drizzle-orm/d1';
import * as schema from './db/schema';

export function createAuth(d1: D1Database) {
	const db = drizzle(d1, { schema });

	return betterAuth({
		database: drizzleAdapter(db, {
			provider: 'sqlite',
			schema
		}),
		emailAndPassword: {
			enabled: true,
			disableSignUp: true
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

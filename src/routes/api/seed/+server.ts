import { json, error } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import { createAuth } from '$lib/server/auth';
import { createDb } from '$lib/server/db';
import { user } from '$lib/server/db/schema';
import { eq } from 'drizzle-orm';

/**
 * One-time seed endpoint to create the admin user.
 * Hit this once, then delete this file.
 *
 * GET /api/seed?secret=<BETTER_AUTH_SECRET>
 */
export const GET: RequestHandler = async ({ url, platform }) => {
	const secret = url.searchParams.get('secret');

	// Guard: require the auth secret as a query param
	if (!secret || secret !== platform?.env.BETTER_AUTH_SECRET) {
		error(403, 'Forbidden');
	}

	const auth = createAuth(platform!.env.DB);
	const db = createDb(platform!.env.DB);

	// Check if admin already exists
	const existing = await db
		.select()
		.from(user)
		.where(eq(user.email, 'admin@fiscalprose.com'))
		.limit(1);

	if (existing.length > 0) {
		return json({ message: 'Admin user already exists', userId: existing[0].id });
	}

	// Create user via server-side API (bypasses disableSignUp)
	const result = await auth.api.signUpEmail({
		body: {
			email: 'admin@fiscalprose.com',
			password: 'FiscalProse2025!',
			name: 'Aman Verma'
		}
	});

	// Promote to admin
	await db
		.update(user)
		.set({ role: 'admin' })
		.where(eq(user.email, 'admin@fiscalprose.com'));

	return json({
		message: 'Admin user created and promoted to admin role',
		email: 'admin@fiscalprose.com'
	});
};

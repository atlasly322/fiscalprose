/**
 * Seed script to create admin user.
 *
 * Usage:
 *   1. Start the dev server: bun run dev
 *   2. In another terminal: bun run scripts/seed.ts
 *
 * This calls the BetterAuth sign-up API endpoint directly.
 * After running, update the user's role to 'admin' via D1 console:
 *   npx wrangler d1 execute fiscalprose-db --local --command="UPDATE user SET role='admin' WHERE email='admin@fiscalprose.com'"
 */

const BASE_URL = 'http://localhost:5173';

async function seed() {
	console.log('Creating admin user...');

	// First, temporarily enable sign-up by calling the API directly
	const res = await fetch(`${BASE_URL}/api/auth/sign-up/email`, {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({
			name: 'Aman Verma',
			email: 'admin@fiscalprose.com',
			password: 'FiscalProse2025!'
		})
	});

	if (!res.ok) {
		const text = await res.text();
		console.error('Failed to create user:', res.status, text);
		process.exit(1);
	}

	const data = await res.json();
	console.log('User created:', data.user?.email ?? data);

	console.log('\nNow promote to admin:');
	console.log(
		'  npx wrangler d1 execute fiscalprose-db --local --command="UPDATE user SET role=\'admin\' WHERE email=\'admin@fiscalprose.com\'"'
	);
}

seed().catch(console.error);

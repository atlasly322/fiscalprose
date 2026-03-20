import { json, error } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

interface TurnstileResponse {
	success: boolean;
	'error-codes': string[];
	challenge_ts?: string;
	hostname?: string;
}

export const POST: RequestHandler = async ({ request, platform }) => {
	const body = (await request.json()) as { token?: string };

	if (!body.token) {
		error(400, 'Missing Turnstile token');
	}

	const secretKey = (platform?.env as unknown as Record<string, string>)['TURNSTILE_SECRET_KEY'];
	if (!secretKey) {
		error(500, 'Turnstile not configured');
	}

	const res = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({
			secret: secretKey,
			response: body.token
		})
	});

	const result = (await res.json()) as TurnstileResponse;

	if (!result.success) {
		error(403, 'Turnstile verification failed');
	}

	return json({ success: true });
};

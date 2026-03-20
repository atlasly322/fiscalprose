import { fail, redirect } from '@sveltejs/kit';
import type { Actions, PageServerLoad } from './$types';
import { createAuth } from '$lib/server/auth';
import { APIError } from 'better-auth/api';

export const load: PageServerLoad = async ({ locals }) => {
	if (locals.user) {
		redirect(302, '/admin');
	}
	return {};
};

export const actions: Actions = {
	default: async ({ request, platform }) => {
		const auth = createAuth(platform!.env.DB);
		const formData = await request.formData();
		const email = formData.get('email')?.toString() ?? '';
		const password = formData.get('password')?.toString() ?? '';

		try {
			await auth.api.signInEmail({
				body: { email, password }
			});
		} catch (e) {
			if (e instanceof APIError) {
				return fail(400, { message: e.message || 'Invalid credentials' });
			}
			return fail(500, { message: 'An unexpected error occurred' });
		}

		redirect(302, '/admin');
	}
};

import type { Actions, PageServerLoad } from './$types';
import { createDb } from '$lib/server/db';
import { post } from '$lib/server/db/schema';
import { desc, eq } from 'drizzle-orm';
import { createAuth } from '$lib/server/auth';
import { redirect } from '@sveltejs/kit';

export const load: PageServerLoad = async ({ platform }) => {
	const db = createDb(platform!.env.DB);

	const posts = await db.select().from(post).orderBy(desc(post.createdAt));

	return { posts };
};

export const actions: Actions = {
	delete: async ({ request, platform }) => {
		const db = createDb(platform!.env.DB);
		const formData = await request.formData();
		const id = formData.get('id')?.toString();
		if (id) {
			await db.delete(post).where(eq(post.id, id));
		}
		return { success: true };
	},
	signOut: async ({ request, platform }) => {
		const auth = createAuth(platform!.env.DB);
		await auth.api.signOut({ headers: request.headers });
		redirect(302, '/login');
	}
};

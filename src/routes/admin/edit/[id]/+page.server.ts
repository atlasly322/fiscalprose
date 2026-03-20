import { fail, redirect, error } from '@sveltejs/kit';
import type { Actions, PageServerLoad } from './$types';
import { createDb } from '$lib/server/db';
import { post } from '$lib/server/db/schema';
import { eq } from 'drizzle-orm';

function slugify(text: string): string {
	return text
		.toLowerCase()
		.replace(/[^a-z0-9]+/g, '-')
		.replace(/(^-|-$)/g, '');
}

function countWords(html: string): number {
	const text = html.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim();
	return text ? text.split(' ').length : 0;
}

function estimateReadTime(wordCount: number): string {
	const minutes = Math.max(1, Math.ceil(wordCount / 250));
	return `${minutes} min`;
}

export const load: PageServerLoad = async ({ params, platform }) => {
	const db = createDb(platform!.env.DB);

	const article = await db
		.select()
		.from(post)
		.where(eq(post.id, params.id))
		.limit(1)
		.then((rows) => rows[0] ?? null);

	if (!article) {
		error(404, 'Post not found');
	}

	return { article };
};

export const actions: Actions = {
	update: async ({ request, platform, params }) => {
		const db = createDb(platform!.env.DB);
		const formData = await request.formData();

		const title = formData.get('title')?.toString()?.trim() ?? '';
		const content = formData.get('content')?.toString() ?? '';
		const excerpt = formData.get('excerpt')?.toString()?.trim() ?? '';
		const category = formData.get('category')?.toString() ?? 'Personal Finance';
		const featured = formData.get('featured') === 'on';
		const published = formData.get('published') === 'on';

		if (!title) {
			return fail(400, { message: 'Title is required' });
		}

		const slug = slugify(title);
		const wordCount = countWords(content);
		const readTime = estimateReadTime(wordCount);

		// Get current post to check publish state
		const current = await db
			.select()
			.from(post)
			.where(eq(post.id, params.id))
			.limit(1)
			.then((rows) => rows[0]);

		await db
			.update(post)
			.set({
				title,
				slug,
				excerpt,
				content,
				category,
				readTime,
				wordCount,
				featured,
				published,
				publishedAt: published && !current?.publishedAt ? new Date() : current?.publishedAt,
				updatedAt: new Date()
			})
			.where(eq(post.id, params.id));

		redirect(302, '/admin');
	},
	delete: async ({ platform, params }) => {
		const db = createDb(platform!.env.DB);
		await db.delete(post).where(eq(post.id, params.id));
		redirect(302, '/admin');
	}
};

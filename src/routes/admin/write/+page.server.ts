import { fail, redirect } from '@sveltejs/kit';
import type { Actions } from './$types';
import { createDb } from '$lib/server/db';
import { post } from '$lib/server/db/schema';

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

export const actions: Actions = {
	default: async ({ request, platform }) => {
		const db = createDb(platform!.env.DB);
		const formData = await request.formData();

		const title = formData.get('title')?.toString()?.trim() ?? '';
		const content = formData.get('content')?.toString() ?? '';
		const excerpt = formData.get('excerpt')?.toString()?.trim() ?? '';
		const category = formData.get('category')?.toString() ?? 'Personal Finance';
		const featured = formData.get('featured') === 'on';
		const published = formData.get('published') === 'on';
		const publishedAtStr = formData.get('publishedAt')?.toString() ?? '';

		if (!title) {
			return fail(400, { message: 'Title is required' });
		}

		const slug = slugify(title);
		const wordCount = countWords(content);
		const readTime = estimateReadTime(wordCount);
		const publishedAt = publishedAtStr ? new Date(publishedAtStr) : published ? new Date() : null;

		await db.insert(post).values({
			title,
			slug,
			excerpt,
			content,
			category,
			readTime,
			wordCount,
			featured,
			published,
			publishedAt
		});

		redirect(302, '/admin');
	}
};

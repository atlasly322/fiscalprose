import type { PageServerLoad } from './$types';
import { createDb } from '$lib/server/db';
import { post } from '$lib/server/db/schema';
import { eq, and } from 'drizzle-orm';
import { error } from '@sveltejs/kit';

export const load: PageServerLoad = async ({ params, platform, parent }) => {
	const { config } = await parent();
	const db = createDb(platform!.env.DB);

	const article = await db
		.select()
		.from(post)
		.where(and(eq(post.slug, params.slug), eq(post.published, true)))
		.limit(1)
		.then((rows) => rows[0] ?? null);

	if (!article) {
		error(404, 'Article not found');
	}

	return { article, config };
};

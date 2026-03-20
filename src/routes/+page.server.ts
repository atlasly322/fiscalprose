import type { PageServerLoad } from './$types';
import { createDb } from '$lib/server/db';
import { post } from '$lib/server/db/schema';
import { eq, desc } from 'drizzle-orm';

export const load: PageServerLoad = async ({ platform }) => {
	const db = createDb(platform!.env.DB);

	const featuredPost = await db
		.select()
		.from(post)
		.where(eq(post.published, true))
		.orderBy(desc(post.featured), desc(post.publishedAt))
		.limit(1)
		.then((rows) => rows[0] ?? null);

	const recentPosts = await db
		.select()
		.from(post)
		.where(eq(post.published, true))
		.orderBy(desc(post.publishedAt))
		.limit(7);

	// Exclude the featured post from the grid
	const gridPosts = featuredPost
		? recentPosts.filter((p) => p.id !== featuredPost.id).slice(0, 6)
		: recentPosts.slice(0, 6);

	return { featuredPost, gridPosts };
};

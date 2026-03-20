import type { LayoutServerLoad } from './$types';
import { createDb } from '$lib/server/db';
import { siteConfig } from '$lib/server/db/schema';
import { defaultConfig, type SiteConfig } from '$lib/site-config';

export const load: LayoutServerLoad = async ({ locals, platform }) => {
	let config: SiteConfig = { ...defaultConfig };

	if (platform?.env.DB) {
		try {
			const db = createDb(platform.env.DB);
			const row = await db.select().from(siteConfig).limit(1).then((r) => r[0]);
			if (row?.data) {
				const saved = JSON.parse(row.data) as Partial<SiteConfig>;
				config = { ...defaultConfig, ...saved };
			}
		} catch {
			// Table might not exist yet, use defaults
		}
	}

	return {
		user: locals.user ?? null,
		session: locals.session ?? null,
		config
	};
};

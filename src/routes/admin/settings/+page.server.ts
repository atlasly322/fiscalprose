import { redirect } from '@sveltejs/kit';
import type { Actions, PageServerLoad } from './$types';
import { createDb } from '$lib/server/db';
import { siteConfig } from '$lib/server/db/schema';
import { defaultConfig, type SiteConfig } from '$lib/site-config';
import { eq } from 'drizzle-orm';

export const load: PageServerLoad = async ({ parent }) => {
	const { config } = await parent();
	return { config };
};

export const actions: Actions = {
	default: async ({ request, platform }) => {
		const db = createDb(platform!.env.DB);
		const formData = await request.formData();

		const config: SiteConfig = {
			siteTitle: formData.get('siteTitle')?.toString() ?? defaultConfig.siteTitle,
			siteTitleAccent:
				formData.get('siteTitleAccent')?.toString() ?? defaultConfig.siteTitleAccent,
			siteTagline: formData.get('siteTagline')?.toString() ?? defaultConfig.siteTagline,
			siteEyebrow: formData.get('siteEyebrow')?.toString() ?? defaultConfig.siteEyebrow,
			navCategories: formData.get('navCategories')?.toString() ?? defaultConfig.navCategories,

			aboutLabel: formData.get('aboutLabel')?.toString() ?? defaultConfig.aboutLabel,
			aboutName: formData.get('aboutName')?.toString() ?? defaultConfig.aboutName,
			aboutBio1: formData.get('aboutBio1')?.toString() ?? defaultConfig.aboutBio1,
			aboutBio2: formData.get('aboutBio2')?.toString() ?? defaultConfig.aboutBio2,
			aboutBio3: formData.get('aboutBio3')?.toString() ?? defaultConfig.aboutBio3,
			skillChips: (formData.get('skillChips')?.toString() ?? '')
				.split(',')
				.map((s) => s.trim())
				.filter(Boolean),

			ctaLabel: formData.get('ctaLabel')?.toString() ?? defaultConfig.ctaLabel,
			ctaHeading: formData.get('ctaHeading')?.toString() ?? defaultConfig.ctaHeading,
			ctaDescription:
				formData.get('ctaDescription')?.toString() ?? defaultConfig.ctaDescription,
			contactEmail: formData.get('contactEmail')?.toString() ?? defaultConfig.contactEmail,
			linkedinUrl: formData.get('linkedinUrl')?.toString() ?? defaultConfig.linkedinUrl,

			heroBadgeText: formData.get('heroBadgeText')?.toString() ?? defaultConfig.heroBadgeText,

			footerText: formData.get('footerText')?.toString() ?? defaultConfig.footerText,

			metaTitle: formData.get('metaTitle')?.toString() ?? defaultConfig.metaTitle,
			metaDescription:
				formData.get('metaDescription')?.toString() ?? defaultConfig.metaDescription
		};

		const jsonData = JSON.stringify(config);

		// Upsert: try update first, insert if no rows affected
		const existing = await db.select().from(siteConfig).limit(1);
		if (existing.length > 0) {
			await db.update(siteConfig).set({ data: jsonData }).where(eq(siteConfig.id, 1));
		} else {
			await db.insert(siteConfig).values({ id: 1, data: jsonData });
		}

		redirect(302, '/admin/settings');
	}
};

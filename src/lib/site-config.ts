export interface SiteConfig {
	// Masthead
	siteTitle: string;
	siteTitleAccent: string;
	siteTagline: string;
	siteEyebrow: string;
	navCategories: string;

	// About
	aboutLabel: string;
	aboutName: string;
	aboutBio1: string;
	aboutBio2: string;
	aboutBio3: string;
	skillChips: string[];

	// CTA / Contact
	ctaLabel: string;
	ctaHeading: string;
	ctaDescription: string;
	contactEmail: string;
	linkedinUrl: string;

	// Hero
	heroBadgeText: string;

	// Footer
	footerText: string;

	// Meta
	metaTitle: string;
	metaDescription: string;
}

export const defaultConfig: SiteConfig = {
	siteTitle: 'Fiscal',
	siteTitleAccent: 'Prose',
	siteTagline: 'Clarity in numbers. Depth in analysis. Trust in every word.',
	siteEyebrow: 'Finance Writer & Analyst',
	navCategories: 'Personal Finance · Markets · Economy · Investment',

	aboutLabel: 'About the Author',
	aboutName: 'Aman Verma',
	aboutBio1:
		'I am an economics graduate with a B.A. (Hons) in Economics from Maharaja Agrasen Institute of Management Studies and a Postgraduate Certificate in Economics from the University of Warwick. I hold certifications in Bloomberg Finance Fundamentals, NISM Equity Derivatives, and Financial Modelling.',
	aboutBio2:
		'My academic work spans trade economics, currency markets, and financial crises — including a dissertation quantifying tariff-driven trade diversion across four countries and a research paper on currencies as an institutional asset class.',
	aboutBio3:
		'I write about personal finance and markets with the same rigour I apply to research — grounded in data, free of jargon, and useful to the reader.',
	skillChips: [
		'Bloomberg Terminal',
		'NISM Certified',
		'Financial Modelling',
		'Python',
		'Stata',
		'Excel'
	],

	ctaLabel: 'Get in Touch',
	ctaHeading: 'Looking for a Finance Writer?',
	ctaDescription:
		"Available for freelance articles, content strategy, brand editorial, and ongoing retainers. Let's build something credible together.",
	contactEmail: 'aman.verma235232@gmail.com',
	linkedinUrl: 'https://www.linkedin.com/in/aman455',

	heroBadgeText: 'Featured',

	footerText: 'FiscalProse — Aman Verma. All rights reserved.',

	metaTitle: 'FiscalProse — Finance Writing by Aman Verma',
	metaDescription: 'Clarity in numbers. Depth in analysis. Trust in every word.'
};

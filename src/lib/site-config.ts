export interface SiteConfig {
	// Masthead
	siteTitle: string;
	siteTitleAccent: string;
	siteTagline: string;
	siteEyebrow: string;
	navCategories: string;

	// About — Intro
	aboutLabel: string;
	aboutName: string;
	aboutRole: string;
	aboutIntro: string;

	// About — Education (pipe-separated entries: "Degree | Institution | Year")
	education: string[];

	// About — Certifications
	certifications: string[];

	// About — Research highlights
	researchHighlights: string[];

	// About — Writing philosophy (short paragraph)
	writingPhilosophy: string;

	// About — Tools & Skills (categorized: "Category: Skill1, Skill2")
	skillCategories: { label: string; items: string[] }[];

	// Legacy skill chips (homepage strip)
	skillChips: string[];

	// Bio paragraphs (homepage strip)
	aboutBio1: string;
	aboutBio2: string;
	aboutBio3: string;

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
	aboutRole: 'Finance Writer & Economics Graduate',
	aboutIntro:
		'I write about personal finance, markets, and economic policy with the same rigour I apply to academic research — grounded in data, free of jargon, and useful to the reader.',

	education: [
		'Postgraduate Certificate in Economics | University of Warwick | 2024',
		'B.A. (Hons) Economics | Maharaja Agrasen Institute of Management Studies | 2023'
	],

	certifications: [
		'Bloomberg Finance Fundamentals',
		'NISM Equity Derivatives',
		'Financial Modelling & Valuation'
	],

	researchHighlights: [
		'Dissertation quantifying tariff-driven trade diversion across four countries',
		'Research paper on currencies as an institutional asset class',
		'Analysis of financial crises and currency market dynamics'
	],

	writingPhilosophy:
		'Finance writing should respect the reader. That means no unnecessary jargon, no clickbait, and no hedging behind vague language. Every claim should have a source, every number should have context, and every article should leave the reader better informed than before.',

	skillCategories: [
		{ label: 'Analysis', items: ['Bloomberg Terminal', 'Financial Modelling', 'Equity Research'] },
		{ label: 'Data & Tools', items: ['Python', 'Stata', 'Excel', 'SQL'] },
		{
			label: 'Writing',
			items: ['Long-form Finance', 'Explainers', 'Policy Analysis', 'Data Journalism']
		}
	],

	skillChips: [
		'Bloomberg Terminal',
		'NISM Certified',
		'Financial Modelling',
		'Python',
		'Stata',
		'Excel'
	],

	aboutBio1:
		'I am an economics graduate with a B.A. (Hons) in Economics from Maharaja Agrasen Institute of Management Studies and a Postgraduate Certificate in Economics from the University of Warwick. I hold certifications in Bloomberg Finance Fundamentals, NISM Equity Derivatives, and Financial Modelling.',
	aboutBio2:
		'My academic work spans trade economics, currency markets, and financial crises — including a dissertation quantifying tariff-driven trade diversion across four countries and a research paper on currencies as an institutional asset class.',
	aboutBio3:
		'I write about personal finance and markets with the same rigour I apply to research — grounded in data, free of jargon, and useful to the reader.',

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

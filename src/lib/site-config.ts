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

	// About — Education (pipe-separated: "Degree | Institution | Year | Details")
	education: string[];

	// About — Certifications
	certifications: string[];

	// About — Research highlights
	researchHighlights: string[];

	// About — Writing philosophy
	writingPhilosophy: string;

	// About — Skills (categorized: "Category: Skill1, Skill2")
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
	aboutRole: 'MSc Economics · Researcher · Finance Writer',
	aboutIntro:
		'I write about personal finance, markets, and economic policy with the same rigour I apply to academic research — grounded in data, free of jargon, and useful to the reader.',

	education: [
		'MSc Economics and International Financial Economics | University of Warwick | 2024–2025 | Econometrics, International Trade, International Financial Management, Investment and the Financial System',
		'B.A. Economics (Hons) | Maharaja Agrasen Institute of Management Studies, Delhi | 2020–2023 | CGPA: 8.36'
	],

	certifications: [
		'Bloomberg Finance Fundamentals',
		'NISM Equity Derivatives',
		'Financial Modeling and Valuation'
	],

	researchHighlights: [
		'Trade Diversion and Third-Party Gains in Trade and FDI: Evidence from the U.S.–China Trade War (2018–2019) — MSc Dissertation using triple-difference and difference-in-differences frameworks across Malaysia, Vietnam, and Mexico',
		'Research Paper on the Asian Financial Crisis 1997 — causes, impact, resolutions, and insights into economic crisis management and policy formulation',
		'Research on currencies as an institutional asset class'
	],

	writingPhilosophy:
		'Finance writing should respect the reader. That means no unnecessary jargon, no clickbait, and no hedging behind vague language. Every claim should have a source, every number should have context, and every article should leave the reader better informed than before.',

	skillCategories: [
		{
			label: 'Research & Analysis',
			items: ['Econometrics', 'Financial Modelling', 'Data Analysis', 'Equity Research']
		},
		{ label: 'Tools & Data', items: ['Bloomberg Terminal', 'Python', 'Stata', 'Excel', 'SQL'] },
		{
			label: 'Writing & Communication',
			items: ['Long-form Finance', 'Explainers', 'Policy Analysis', 'Data Journalism']
		},
		{ label: 'Languages', items: ['English (Professional)', 'Hindi (Native)'] }
	],

	skillChips: [
		'Warwick MSc',
		'Bloomberg',
		'NISM Certified',
		'Financial Modelling',
		'Econometrics',
		'Python',
		'Stata'
	],

	aboutBio1:
		'MSc in Economics and International Financial Economics from the University of Warwick. B.A. Economics (Hons) from MAIMS, Delhi. Bloomberg and NISM certified.',
	aboutBio2:
		'Research spans trade economics, currency markets, and financial crises — including a dissertation on tariff-driven trade diversion in the U.S.–China trade war using triple-difference frameworks.',
	aboutBio3:
		'I write about personal finance and markets with the same rigour I apply to research — grounded in data, free of jargon, and useful to the reader.',

	ctaLabel: 'Get in Touch',
	ctaHeading: 'Looking for a Finance Writer?',
	ctaDescription:
		"Available for freelance articles, content strategy, brand editorial, and ongoing retainers. Let's build something credible together.",
	contactEmail: 'aman.verma235232@gmail.com',
	linkedinUrl: 'https://www.linkedin.com/in/aman455/',

	heroBadgeText: 'Featured',

	footerText: 'FiscalProse — Aman Verma. All rights reserved.',

	metaTitle: 'FiscalProse — Finance Writing by Aman Verma',
	metaDescription: 'Clarity in numbers. Depth in analysis. Trust in every word.'
};

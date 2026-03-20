<script lang="ts">
	import { enhance } from '$app/forms';

	let { data } = $props();
	const c = data.config;

	const labelStyle =
		"font-family:'DM Mono',monospace;font-size:0.65rem;letter-spacing:0.15em;text-transform:uppercase;color:var(--muted);display:block;margin-bottom:0.4rem;";
	const inputStyle =
		"width:100%;padding:0.75rem 1rem;border:1px solid var(--rule);background:var(--parchment);font-family:'Source Serif 4',serif;font-size:0.95rem;color:var(--ink);";
	const textareaStyle = inputStyle + 'resize:vertical;';
	const sectionHeadingStyle =
		"font-family:'Playfair Display',serif;font-size:1.2rem;font-weight:700;margin:2rem 0 1rem;padding-top:1.5rem;border-top:1px solid var(--rule);";
</script>

<h1 style="font-family:'Playfair Display',serif;font-size:1.8rem;font-weight:700;margin-bottom:0.5rem;">
	Site Settings
</h1>
<p style="font-family:'DM Mono',monospace;font-size:0.7rem;color:var(--muted);margin-bottom:2rem;">
	Edit every piece of content on your site
</p>

<form method="POST" use:enhance style="display:flex;flex-direction:column;gap:1rem;max-width:800px;">
	<!-- MASTHEAD -->
	<h2 style={sectionHeadingStyle}>Masthead</h2>

	<div style="display:grid;grid-template-columns:1fr 1fr;gap:1rem;">
		<div>
			<label for="siteTitle" style={labelStyle}>Site Title (first part)</label>
			<input type="text" id="siteTitle" name="siteTitle" value={c.siteTitle} style={inputStyle} />
		</div>
		<div>
			<label for="siteTitleAccent" style={labelStyle}>Title Accent (gold part)</label>
			<input
				type="text"
				id="siteTitleAccent"
				name="siteTitleAccent"
				value={c.siteTitleAccent}
				style={inputStyle}
			/>
		</div>
	</div>

	<div>
		<label for="siteTagline" style={labelStyle}>Tagline</label>
		<input type="text" id="siteTagline" name="siteTagline" value={c.siteTagline} style={inputStyle} />
	</div>

	<div>
		<label for="siteEyebrow" style={labelStyle}>Eyebrow Text (above title)</label>
		<input
			type="text"
			id="siteEyebrow"
			name="siteEyebrow"
			value={c.siteEyebrow}
			style={inputStyle}
		/>
	</div>

	<div>
		<label for="navCategories" style={labelStyle}>Category Bar (top line)</label>
		<input
			type="text"
			id="navCategories"
			name="navCategories"
			value={c.navCategories}
			style={inputStyle}
		/>
	</div>

	<!-- ABOUT -->
	<h2 style={sectionHeadingStyle}>About Section</h2>

	<div style="display:grid;grid-template-columns:1fr 1fr;gap:1rem;">
		<div>
			<label for="aboutName" style={labelStyle}>Author Name</label>
			<input type="text" id="aboutName" name="aboutName" value={c.aboutName} style={inputStyle} />
		</div>
		<div>
			<label for="aboutLabel" style={labelStyle}>About Label</label>
			<input
				type="text"
				id="aboutLabel"
				name="aboutLabel"
				value={c.aboutLabel}
				style={inputStyle}
			/>
		</div>
	</div>

	<div>
		<label for="aboutBio1" style={labelStyle}>Bio Paragraph 1</label>
		<textarea id="aboutBio1" name="aboutBio1" rows="3" style={textareaStyle}>{c.aboutBio1}</textarea>
	</div>

	<div>
		<label for="aboutBio2" style={labelStyle}>Bio Paragraph 2</label>
		<textarea id="aboutBio2" name="aboutBio2" rows="3" style={textareaStyle}>{c.aboutBio2}</textarea>
	</div>

	<div>
		<label for="aboutBio3" style={labelStyle}>Bio Paragraph 3</label>
		<textarea id="aboutBio3" name="aboutBio3" rows="3" style={textareaStyle}>{c.aboutBio3}</textarea>
	</div>

	<div>
		<label for="skillChips" style={labelStyle}>Skill Chips (comma-separated)</label>
		<input
			type="text"
			id="skillChips"
			name="skillChips"
			value={c.skillChips.join(', ')}
			style={inputStyle}
		/>
	</div>

	<!-- CONTACT / CTA -->
	<h2 style={sectionHeadingStyle}>Contact / CTA</h2>

	<div style="display:grid;grid-template-columns:1fr 1fr;gap:1rem;">
		<div>
			<label for="ctaLabel" style={labelStyle}>Section Label</label>
			<input type="text" id="ctaLabel" name="ctaLabel" value={c.ctaLabel} style={inputStyle} />
		</div>
		<div>
			<label for="ctaHeading" style={labelStyle}>Heading</label>
			<input
				type="text"
				id="ctaHeading"
				name="ctaHeading"
				value={c.ctaHeading}
				style={inputStyle}
			/>
		</div>
	</div>

	<div>
		<label for="ctaDescription" style={labelStyle}>Description</label>
		<textarea id="ctaDescription" name="ctaDescription" rows="2" style={textareaStyle}
			>{c.ctaDescription}</textarea
		>
	</div>

	<div style="display:grid;grid-template-columns:1fr 1fr;gap:1rem;">
		<div>
			<label for="contactEmail" style={labelStyle}>Contact Email</label>
			<input
				type="email"
				id="contactEmail"
				name="contactEmail"
				value={c.contactEmail}
				style={inputStyle}
			/>
		</div>
		<div>
			<label for="linkedinUrl" style={labelStyle}>LinkedIn URL</label>
			<input
				type="url"
				id="linkedinUrl"
				name="linkedinUrl"
				value={c.linkedinUrl}
				style={inputStyle}
			/>
		</div>
	</div>

	<!-- HERO & FOOTER -->
	<h2 style={sectionHeadingStyle}>Hero & Footer</h2>

	<div>
		<label for="heroBadgeText" style={labelStyle}>Hero Badge Text</label>
		<input
			type="text"
			id="heroBadgeText"
			name="heroBadgeText"
			value={c.heroBadgeText}
			style={inputStyle}
		/>
	</div>

	<div>
		<label for="footerText" style={labelStyle}>Footer Text</label>
		<input
			type="text"
			id="footerText"
			name="footerText"
			value={c.footerText}
			style={inputStyle}
		/>
	</div>

	<!-- META / SEO -->
	<h2 style={sectionHeadingStyle}>SEO / Meta</h2>

	<div>
		<label for="metaTitle" style={labelStyle}>Page Title (browser tab)</label>
		<input type="text" id="metaTitle" name="metaTitle" value={c.metaTitle} style={inputStyle} />
	</div>

	<div>
		<label for="metaDescription" style={labelStyle}>Meta Description</label>
		<textarea id="metaDescription" name="metaDescription" rows="2" style={textareaStyle}
			>{c.metaDescription}</textarea
		>
	</div>

	<div style="margin-top:1rem;">
		<button type="submit" class="btn-primary">Save Settings</button>
		<a href="/admin" class="btn-outline">Cancel</a>
	</div>
</form>

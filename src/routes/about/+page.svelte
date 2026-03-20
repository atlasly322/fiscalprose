<script lang="ts">
	import Masthead from '$lib/components/Masthead.svelte';
	import Footer from '$lib/components/Footer.svelte';

	let { data } = $props();
	const c = data.config;
</script>

<svelte:head>
	<title>About — {c.siteTitle}{c.siteTitleAccent}</title>
</svelte:head>

<Masthead config={c} />

<!-- Hero intro -->
<div class="about-strip">
	<div class="about-inner">
		<div>
			<p class="about-name">
				<em>{c.aboutRole}</em>
				{c.aboutName}
			</p>
		</div>
		<div>
			<p class="about-bio" style="font-size:1.1rem;line-height:1.9;">{c.aboutIntro}</p>
		</div>
	</div>
</div>

<!-- Structured sections -->
<div class="page-wrapper">

	<!-- Education -->
	<section>
		<p class="section-label">Education</p>
		<div style="display:flex;flex-direction:column;gap:1.5rem;">
			{#each c.education as entry}
				{@const parts = entry.split('|').map((s) => s.trim())}
				<div style="border-left:3px solid var(--gold);padding-left:1.5rem;">
					<div style="font-family:'Playfair Display',serif;font-size:1.15rem;font-weight:700;line-height:1.3;">{parts[0]}</div>
					<div style="font-family:'DM Mono',monospace;font-size:0.72rem;letter-spacing:0.1em;color:var(--muted);margin-top:0.3rem;">
						{parts[1]}{#if parts[2]} &nbsp;·&nbsp; {parts[2]}{/if}
					</div>
					{#if parts[3]}
						<div style="font-size:0.88rem;color:var(--slate);margin-top:0.5rem;line-height:1.6;">{parts[3]}</div>
					{/if}
				</div>
			{/each}
		</div>
	</section>

	<!-- Certifications -->
	<section style="padding-top:0;">
		<p class="section-label">Certifications</p>
		<div style="display:flex;flex-wrap:wrap;gap:0.6rem;">
			{#each c.certifications as cert}
				<span style="border:2px solid var(--ink);font-family:'DM Mono',monospace;font-size:0.68rem;letter-spacing:0.1em;padding:0.5rem 1.2rem;color:var(--ink);text-transform:uppercase;">
					{cert}
				</span>
			{/each}
		</div>
	</section>

	<!-- Skills & Tools -->
	<section style="padding-top:0;">
		<p class="section-label">Skills & Tools</p>
		<div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(280px,1fr));gap:2rem;">
			{#each c.skillCategories as category}
				<div>
					<div style="font-family:'DM Mono',monospace;font-size:0.6rem;letter-spacing:0.2em;text-transform:uppercase;color:var(--gold);margin-bottom:0.8rem;border-top:2px solid var(--ink);padding-top:0.6rem;">{category.label}</div>
					<div style="display:flex;flex-wrap:wrap;gap:0.4rem;">
						{#each category.items as skill}
							<span class="chip">{skill}</span>
						{/each}
					</div>
				</div>
			{/each}
		</div>
	</section>

	<!-- Research -->
	<section style="padding-top:0;">
		<p class="section-label">Research</p>
		<div style="display:flex;flex-direction:column;gap:0.8rem;">
			{#each c.researchHighlights as highlight}
				<div style="display:flex;gap:0.8rem;align-items:baseline;">
					<span style="color:var(--gold);font-size:0.8rem;flex-shrink:0;">→</span>
					<p style="font-size:0.95rem;color:var(--slate);line-height:1.7;margin:0;">{highlight}</p>
				</div>
			{/each}
		</div>
	</section>

	<!-- Writing Philosophy -->
	<section style="padding-top:0;">
		<p class="section-label">Writing Approach</p>
		<div class="pullquote" style="text-align:left;font-size:1.05rem;font-style:normal;font-family:'Source Serif 4',serif;line-height:1.8;background:var(--parchment);border-top:2px solid var(--ink);border-bottom:2px solid var(--ink);padding:1.5rem 2rem;">
			{c.writingPhilosophy}
		</div>
	</section>

</div>

<!-- CTA -->
<div class="cta-section">
	<p class="section-label" style="justify-content:center;margin-bottom:1.5rem;">{c.ctaLabel}</p>
	<h2>{c.ctaHeading}</h2>
	<p>{c.ctaDescription}</p>
	<a href="mailto:{c.contactEmail}" class="btn-primary">Email Me</a>
	<a href={c.linkedinUrl} class="btn-outline" target="_blank" rel="noopener">LinkedIn Profile</a>
</div>

<Footer config={c} />

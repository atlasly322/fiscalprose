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
<div class="page-wrapper about-page">

	<!-- Education -->
	<section>
		<p class="section-label">Education</p>
		<div class="about-edu-list">
			{#each c.education as entry}
				{@const parts = entry.split('|').map((s) => s.trim())}
				<div class="about-edu-item">
					<div class="about-edu-degree">{parts[0]}</div>
					<div class="about-edu-meta">
						{parts[1]}{#if parts[2]} &nbsp;·&nbsp; {parts[2]}{/if}
					</div>
					{#if parts[3]}
						<div class="about-edu-detail">{parts[3]}</div>
					{/if}
				</div>
			{/each}
		</div>
	</section>

	<!-- Certifications -->
	<section style="padding-top:0;">
		<p class="section-label">Certifications</p>
		<div class="about-cert-list">
			{#each c.certifications as cert}
				<span class="about-cert">{cert}</span>
			{/each}
		</div>
	</section>

	<!-- Skills & Tools -->
	<section style="padding-top:0;">
		<p class="section-label">Skills & Tools</p>
		<div class="about-skills-grid">
			{#each c.skillCategories as category}
				<div class="about-skill-group">
					<div class="about-skill-label">{category.label}</div>
					<div class="about-skill-chips">
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
		<div class="about-research-list">
			{#each c.researchHighlights as highlight}
				<div class="about-research-item">
					<span class="about-research-arrow">→</span>
					<p>{highlight}</p>
				</div>
			{/each}
		</div>
	</section>

	<!-- Writing Philosophy -->
	<section style="padding-top:0;">
		<p class="section-label">Writing Approach</p>
		<div class="about-philosophy">{c.writingPhilosophy}</div>
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

<style>
	.about-page section {
		padding: 3rem 0;
	}

	/* Education */
	.about-edu-list {
		display: flex;
		flex-direction: column;
		gap: 1.5rem;
	}

	.about-edu-item {
		border-left: 3px solid var(--gold);
		padding-left: 1.5rem;
	}

	.about-edu-degree {
		font-family: 'Playfair Display', serif;
		font-size: 1.15rem;
		font-weight: 700;
		line-height: 1.3;
	}

	.about-edu-meta {
		font-family: 'DM Mono', monospace;
		font-size: 0.72rem;
		letter-spacing: 0.1em;
		color: var(--muted);
		margin-top: 0.3rem;
	}

	.about-edu-detail {
		font-size: 0.88rem;
		color: var(--slate);
		margin-top: 0.5rem;
		line-height: 1.6;
	}

	/* Certifications */
	.about-cert-list {
		display: flex;
		flex-wrap: wrap;
		gap: 0.6rem;
	}

	.about-cert {
		border: 2px solid var(--ink);
		font-family: 'DM Mono', monospace;
		font-size: 0.68rem;
		letter-spacing: 0.1em;
		padding: 0.5rem 1.2rem;
		color: var(--ink);
		text-transform: uppercase;
	}

	/* Skills */
	.about-skills-grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
		gap: 2rem;
	}

	.about-skill-label {
		font-family: 'DM Mono', monospace;
		font-size: 0.6rem;
		letter-spacing: 0.2em;
		text-transform: uppercase;
		color: var(--gold);
		margin-bottom: 0.8rem;
		border-top: 2px solid var(--ink);
		padding-top: 0.6rem;
	}

	.about-skill-chips {
		display: flex;
		flex-wrap: wrap;
		gap: 0.4rem;
	}

	/* Research */
	.about-research-list {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	.about-research-item {
		display: flex;
		gap: 0.8rem;
		align-items: baseline;
	}

	.about-research-arrow {
		color: var(--gold);
		font-size: 0.8rem;
		flex-shrink: 0;
	}

	.about-research-item p {
		font-size: 0.95rem;
		color: var(--slate);
		line-height: 1.7;
		margin: 0;
	}

	/* Philosophy */
	.about-philosophy {
		text-align: left;
		font-size: 1.05rem;
		font-style: normal;
		font-family: 'Source Serif 4', serif;
		line-height: 1.8;
		background: var(--parchment);
		border-top: 2px solid var(--ink);
		border-bottom: 2px solid var(--ink);
		padding: 1.5rem 2rem;
	}

	/* Mobile */
	@media (max-width: 720px) {
		.about-page section {
			padding: 2rem 0;
		}

		.about-edu-item {
			padding-left: 1rem;
		}

		.about-edu-degree {
			font-size: 1rem;
		}

		.about-cert {
			font-size: 0.6rem;
			padding: 0.4rem 0.8rem;
		}

		.about-skills-grid {
			grid-template-columns: 1fr 1fr;
			gap: 1.2rem;
		}

		.about-philosophy {
			font-size: 0.95rem;
			padding: 1.2rem 1rem;
		}

		.about-research-item p {
			font-size: 0.88rem;
		}
	}
</style>

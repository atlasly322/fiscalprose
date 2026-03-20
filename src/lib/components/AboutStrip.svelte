<script lang="ts">
	import type { SiteConfig } from '$lib/site-config';

	let { config }: { config: SiteConfig } = $props();
</script>

<div class="about-strip">
	<div class="about-inner about-strip-grid">
		<div>
			<p class="about-name" style="margin-bottom:1rem;">
				<em>{config.aboutLabel}</em>
				{config.aboutName}
			</p>
			<p style="font-family:'DM Mono',monospace;font-size:0.68rem;letter-spacing:0.1em;color:var(--gold);text-transform:uppercase;">{config.aboutRole}</p>
		</div>

		<div>
			<p class="about-bio" style="margin-bottom:1.2rem;">{config.aboutIntro}</p>
			<div class="skill-chips">
				{#each config.skillChips as chip}
					<span class="chip">{chip}</span>
				{/each}
			</div>
		</div>

		<div class="about-actions">
			<a href="/about" class="about-btn-outline">Full Profile →</a>
			<a href={config.linkedinUrl} target="_blank" rel="noopener" class="about-btn-gold">LinkedIn →</a>
			<a href="mailto:{config.contactEmail}" class="about-email">{config.contactEmail}</a>
		</div>
	</div>
</div>

<style>
	.about-strip-grid {
		grid-template-columns: 1fr 1.5fr 1fr;
		align-items: start;
	}

	.about-actions {
		text-align: right;
		display: flex;
		flex-direction: column;
		gap: 0.6rem;
		align-items: flex-end;
	}

	.about-btn-outline {
		display: inline-block;
		border: 1px solid #3a3530;
		color: #9a9088;
		font-family: 'DM Mono', monospace;
		font-size: 0.65rem;
		letter-spacing: 0.15em;
		text-transform: uppercase;
		padding: 0.6rem 1.5rem;
		text-decoration: none;
		transition: all 0.2s;
		width: fit-content;
	}

	.about-btn-gold {
		display: inline-block;
		background: var(--gold);
		color: var(--cream);
		font-family: 'DM Mono', monospace;
		font-size: 0.65rem;
		letter-spacing: 0.15em;
		text-transform: uppercase;
		padding: 0.6rem 1.5rem;
		text-decoration: none;
		transition: all 0.2s;
		width: fit-content;
	}

	.about-email {
		font-family: 'DM Mono', monospace;
		font-size: 0.6rem;
		letter-spacing: 0.08em;
		color: #9a9088;
		text-decoration: none;
	}

	@media (max-width: 720px) {
		.about-strip-grid {
			grid-template-columns: 1fr !important;
			gap: 1.5rem !important;
		}

		.about-actions {
			text-align: left;
			align-items: flex-start;
			flex-direction: row;
			flex-wrap: wrap;
			gap: 0.5rem;
		}
	}
</style>

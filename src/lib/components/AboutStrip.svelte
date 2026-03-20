<script lang="ts">
	import type { SiteConfig } from '$lib/site-config';

	let { config }: { config: SiteConfig } = $props();
</script>

<div class="about-strip">
	<div class="about-inner" style="grid-template-columns:1fr 1.5fr 1fr;align-items:start;">
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

		<div style="text-align:right;display:flex;flex-direction:column;gap:0.6rem;align-items:flex-end;">
			<a href="/about" style="display:inline-block;border:1px solid #3a3530;color:#9a9088;font-family:'DM Mono',monospace;font-size:0.65rem;letter-spacing:0.15em;text-transform:uppercase;padding:0.6rem 1.5rem;text-decoration:none;transition:all 0.2s;width:fit-content;">
				Full Profile →
			</a>
			<a href={config.linkedinUrl} target="_blank" rel="noopener" style="display:inline-block;background:var(--gold);color:var(--cream);font-family:'DM Mono',monospace;font-size:0.65rem;letter-spacing:0.15em;text-transform:uppercase;padding:0.6rem 1.5rem;text-decoration:none;transition:all 0.2s;width:fit-content;">
				LinkedIn →
			</a>
			<a href="mailto:{config.contactEmail}" style="font-family:'DM Mono',monospace;font-size:0.6rem;letter-spacing:0.08em;color:#9a9088;text-decoration:none;">{config.contactEmail}</a>
		</div>
	</div>
</div>

<style>
	@media (max-width: 720px) {
		.about-inner {
			grid-template-columns: 1fr !important;
			text-align: left !important;
		}
		.about-inner > div:last-child {
			text-align: left !important;
			align-items: flex-start !important;
		}
	}
</style>

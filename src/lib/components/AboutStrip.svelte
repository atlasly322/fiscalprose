<script lang="ts">
	import type { SiteConfig } from '$lib/site-config';

	let { config }: { config: SiteConfig } = $props();
</script>

<div class="about-strip">
	<div class="about-inner">
		<div>
			<p class="about-name">
				<em>{config.aboutLabel}</em>
				{config.aboutName}
			</p>
		</div>
		<div>
			<p class="about-bio">{config.aboutBio1}</p>
			{#if config.aboutBio2}
				<p class="about-bio">{config.aboutBio2}</p>
			{/if}
			{#if config.aboutBio3}
				<p class="about-bio">{config.aboutBio3}</p>
			{/if}
			<div class="skill-chips">
				{#each config.skillChips as chip}
					<span class="chip">{chip}</span>
				{/each}
			</div>
		</div>
	</div>
</div>

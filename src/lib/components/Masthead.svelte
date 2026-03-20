<script lang="ts">
	import type { SiteConfig } from '$lib/site-config';

	let { config }: { config: SiteConfig } = $props();

	const today = new Date().toLocaleDateString('en-IN', {
		weekday: 'long',
		year: 'numeric',
		month: 'long',
		day: 'numeric'
	});
</script>

<header class="masthead">
	<div class="masthead-top">
		<span>{config.navCategories}</span>
		<span>{today}</span>
	</div>
	<div class="masthead-main animate">
		<p class="masthead-eyebrow">{config.siteEyebrow}</p>
		<h1 class="site-title">
			<a href="/" style="text-decoration:none;color:inherit;"
				>{config.siteTitle}<span>{config.siteTitleAccent}</span></a
			>
		</h1>
		<p class="site-tagline">{config.siteTagline}</p>
	</div>
	<nav class="animate delay-1">
		<a href="/">Home</a>
		<a href="/about">About</a>
	</nav>
</header>

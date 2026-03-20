<script lang="ts">
	import Masthead from '$lib/components/Masthead.svelte';
	import AboutStrip from '$lib/components/AboutStrip.svelte';
	import Footer from '$lib/components/Footer.svelte';

	let { data } = $props();
</script>

<svelte:head>
	<title>About — {data.config.siteTitle}{data.config.siteTitleAccent}</title>
</svelte:head>

<Masthead config={data.config} />
<AboutStrip config={data.config} />

<div class="cta-section">
	<p class="section-label" style="justify-content:center;margin-bottom:1.5rem;">{data.config.ctaLabel}</p>
	<h2>{data.config.ctaHeading}</h2>
	<p>{data.config.ctaDescription}</p>
	<a href="mailto:{data.config.contactEmail}" class="btn-primary">Email Me</a>
	<a href={data.config.linkedinUrl} class="btn-outline" target="_blank" rel="noopener">LinkedIn Profile</a>
</div>

<Footer config={data.config} />

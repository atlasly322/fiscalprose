<script lang="ts">
	import Masthead from '$lib/components/Masthead.svelte';
	import AboutStrip from '$lib/components/AboutStrip.svelte';
	import Footer from '$lib/components/Footer.svelte';
</script>

<svelte:head>
	<title>About — FiscalProse</title>
</svelte:head>

<Masthead />
<AboutStrip />

<div class="cta-section">
	<p class="section-label" style="justify-content:center;margin-bottom:1.5rem;">Get in Touch</p>
	<h2>Looking for a Finance Writer?</h2>
	<p>Available for freelance articles, content strategy, brand editorial, and ongoing retainers. Let's build something credible together.</p>
	<a href="mailto:amanverma@example.com" class="btn-primary">Email Me</a>
	<a href="https://www.linkedin.com/in/aman455" class="btn-outline" target="_blank" rel="noopener">LinkedIn Profile</a>
</div>

<Footer />

<script lang="ts">
	import './layout.css';

	let { children, data } = $props();
</script>

<svelte:head>
	<title>{data.config.metaTitle}</title>
	<meta name="description" content={data.config.metaDescription} />
</svelte:head>

{@render children()}

<script lang="ts">
	import './layout.css';

	let { children } = $props();
</script>

<svelte:head>
	<title>FiscalProse — Finance Writing by Aman Verma</title>
	<meta name="description" content="Clarity in numbers. Depth in analysis. Trust in every word." />
</svelte:head>

{@render children()}

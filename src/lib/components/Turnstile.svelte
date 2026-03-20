<script lang="ts">
	import { onMount, onDestroy } from 'svelte';

	let { siteKey, onverify }: { siteKey: string; onverify: (token: string) => void } = $props();

	let container: HTMLDivElement;
	let widgetId: string | undefined;

	onMount(() => {
		function renderWidget() {
			if (!container) return;
			widgetId = (window as any).turnstile.render(container, {
				sitekey: siteKey,
				theme: 'light',
				callback: (token: string) => {
					onverify(token);
				}
			});
		}

		if ((window as any).turnstile) {
			renderWidget();
		} else {
			const script = document.createElement('script');
			script.src = 'https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit';
			script.async = true;
			script.onload = renderWidget;
			document.head.appendChild(script);
		}
	});

	onDestroy(() => {
		if (widgetId !== undefined && (window as any).turnstile) {
			(window as any).turnstile.remove(widgetId);
		}
	});
</script>

<div bind:this={container} style="margin:0 auto;"></div>

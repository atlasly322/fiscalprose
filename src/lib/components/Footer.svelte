<script lang="ts">
	import type { SiteConfig } from '$lib/site-config';

	let { config }: { config: SiteConfig } = $props();
</script>

<footer class="site-footer">
	&copy; {new Date().getFullYear()} {config.footerText}
</footer>

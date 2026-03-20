<script lang="ts">
	import { onMount } from 'svelte';
	import Masthead from '$lib/components/Masthead.svelte';
	import Footer from '$lib/components/Footer.svelte';

	let { data } = $props();

	function formatDate(date: Date | null) {
		if (!date) return '';
		return new Date(date).toLocaleDateString('en-IN', { month: 'long', year: 'numeric' });
	}

	onMount(() => {
		const body = document.querySelector('.article-body');
		const toc = document.getElementById('toc');
		if (!body || !toc) return;

		const headings = body.querySelectorAll('h2');
		headings.forEach((h, i) => {
			if (!h.id) h.id = `section-${i}`;
			const link = document.createElement('a');
			link.href = `#${h.id}`;
			link.textContent = h.textContent || '';
			toc.appendChild(link);
		});
	});
</script>

<svelte:head>
	<title>{data.article.title} — FiscalProse</title>
	<meta name="description" content={data.article.excerpt} />
</svelte:head>

<Masthead />

<div class="page-wrapper">
	<section>
		<div class="sample-wrapper">
			<aside class="sample-sidebar">
				<p class="sidebar-label">Contents</p>
				<nav class="sidebar-toc" id="toc"></nav>
			</aside>

			<div class="article-body">
				<h1>{data.article.title}</h1>
				<div class="byline">
					By <strong>Aman Verma</strong> &nbsp;·&nbsp; {data.article.category} &nbsp;·&nbsp; {data.article.readTime} &nbsp;·&nbsp; {formatDate(data.article.publishedAt)}
				</div>
				{@html data.article.content}
			</div>
		</div>
	</section>
</div>

<Footer />

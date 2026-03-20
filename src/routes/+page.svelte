<script lang="ts">
	import Masthead from '$lib/components/Masthead.svelte';
	import HeroArticle from '$lib/components/HeroArticle.svelte';
	import ArticleCard from '$lib/components/ArticleCard.svelte';
	import AboutStrip from '$lib/components/AboutStrip.svelte';
	import Footer from '$lib/components/Footer.svelte';

	let { data } = $props();
</script>

<Masthead />

{#if data.featuredPost}
	<HeroArticle post={data.featuredPost} />
{/if}

{#if data.gridPosts.length > 0}
	<div class="page-wrapper">
		<p class="section-label">Recent Articles</p>
		<div class="article-grid">
			{#each data.gridPosts as post, i}
				<ArticleCard
					title={post.title}
					slug={post.slug}
					category={post.category}
					excerpt={post.excerpt}
					readTime={post.readTime}
					wordCount={post.wordCount}
					publishedAt={post.publishedAt}
					delay={i % 3}
				/>
			{/each}
		</div>
	</div>
{:else if !data.featuredPost}
	<div class="page-wrapper">
		<section style="text-align:center;">
			<p class="section-label">No Articles Yet</p>
			<p style="color:var(--slate);font-size:1.1rem;">Check back soon for finance insights and analysis.</p>
		</section>
	</div>
{/if}

<AboutStrip />
<Footer />

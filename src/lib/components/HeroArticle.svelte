<script lang="ts">
	import type { InferSelectModel } from 'drizzle-orm';
	import type { post } from '$lib/server/db/schema';
	import type { SiteConfig } from '$lib/site-config';

	type Post = InferSelectModel<typeof post>;

	let { post: heroPost, config }: { post: Post; config: SiteConfig } = $props();

	function formatDate(date: Date | null) {
		if (!date) return '';
		return new Date(date).toLocaleDateString('en-IN', { month: 'long', year: 'numeric' });
	}
</script>

<div class="page-wrapper">
	<section>
		<p class="section-label">Featured Work</p>
		<div class="hero animate delay-2">
			<div class="hero-text">
				<span class="hero-badge">&#10022; {config.heroBadgeText}</span>
				<h2>
					<a href="/blog/{heroPost.slug}" style="text-decoration:none;color:inherit;" title="Click to read full article"
						>{heroPost.title}</a
					>
				</h2>
				<p class="hero-excerpt">{heroPost.excerpt}</p>
				<p class="hero-meta">
					<strong>{heroPost.category}</strong> &nbsp;·&nbsp; {heroPost.wordCount.toLocaleString()} words
					&nbsp;·&nbsp; ⊙ {heroPost.readTime} &nbsp;·&nbsp; {formatDate(heroPost.publishedAt)}
				</p>
			</div>
			<div class="hero-visual animate delay-3">
				<div class="stat-grid">
					<div class="stat-item">
						<div class="stat-number">{heroPost.wordCount.toLocaleString()}</div>
						<div class="stat-label">Words</div>
						<div class="stat-context">Carefully researched & written</div>
					</div>
					<div class="stat-item">
						<div class="stat-number">{heroPost.readTime}</div>
						<div class="stat-label">Read Time</div>
						<div class="stat-context">At a comfortable pace</div>
					</div>
					<div class="stat-item">
						<div class="stat-number">{heroPost.category.split(' ')[0]}</div>
						<div class="stat-label">Category</div>
						<div class="stat-context">{heroPost.category}</div>
					</div>
					<div class="stat-item">
						<div class="stat-number">{formatDate(heroPost.publishedAt)}</div>
						<div class="stat-label">Published</div>
						<div class="stat-context">Original analysis</div>
					</div>
				</div>
			</div>
		</div>
	</section>
</div>

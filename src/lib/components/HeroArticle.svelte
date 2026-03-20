<script lang="ts">
	import type { InferSelectModel } from 'drizzle-orm';
	import type { post } from '$lib/server/db/schema';

	type Post = InferSelectModel<typeof post>;

	let { post: heroPost }: { post: Post } = $props();

	function formatDate(date: Date | null) {
		if (!date) return '';
		return new Date(date).toLocaleDateString('en-IN', { month: 'long', year: 'numeric' });
	}

	function getReadingStats(p: Post) {
		const words = p.wordCount;
		const mins = p.readTime;
		const pages = Math.max(1, Math.round(words / 300));
		return { words, mins, pages };
	}

	const stats = $derived(getReadingStats(heroPost));
</script>

<div class="page-wrapper">
	<section>
		<p class="section-label">Featured Work</p>
		<div class="hero animate delay-2">
			<div class="hero-text">
				<span class="hero-badge">&#10022; Featured</span>
				<h2>
					<a href="/blog/{heroPost.slug}" style="text-decoration:none;color:inherit;"
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
						<div class="stat-number">{stats.words.toLocaleString()}</div>
						<div class="stat-label">Words</div>
						<div class="stat-context">Carefully researched & written</div>
					</div>
					<div class="stat-item">
						<div class="stat-number">{stats.mins}</div>
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

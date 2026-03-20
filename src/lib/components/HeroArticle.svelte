<script lang="ts">
	import type { InferSelectModel } from 'drizzle-orm';
	import type { post } from '$lib/server/db/schema';

	type Post = InferSelectModel<typeof post>;

	let { post: heroPost }: { post: Post } = $props();

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
				<span class="hero-badge">&#10022; Cover Story</span>
				<h2><a href="/blog/{heroPost.slug}" style="text-decoration:none;color:inherit;">{heroPost.title}</a></h2>
				<p class="hero-excerpt">{heroPost.excerpt}</p>
				<p class="hero-meta">
					<strong>{heroPost.category}</strong> &nbsp;·&nbsp; {heroPost.wordCount.toLocaleString()} words &nbsp;·&nbsp; ⊙ {heroPost.readTime} &nbsp;·&nbsp; {formatDate(heroPost.publishedAt)}
				</p>
			</div>
			<div class="hero-visual animate delay-3">
				<div class="stat-grid">
					<div class="stat-item">
						<div class="stat-number">11Cr+</div>
						<div class="stat-label">Demat Accounts</div>
						<div class="stat-context">As of Feb 2025, a 3× increase from 2019</div>
					</div>
					<div class="stat-item">
						<div class="stat-number">₹21L Cr</div>
						<div class="stat-label">SIP AUM</div>
						<div class="stat-context">Record inflows into mutual funds</div>
					</div>
					<div class="stat-item">
						<div class="stat-number">6.2%</div>
						<div class="stat-label">Savings Rate Drop</div>
						<div class="stat-context">Households shifting from FDs to equities</div>
					</div>
					<div class="stat-item">
						<div class="stat-number">₹22,000+</div>
						<div class="stat-label">Avg Monthly SIP</div>
						<div class="stat-context">Crossed ₹25,000 Cr in Jan 2025</div>
					</div>
				</div>
			</div>
		</div>
	</section>
</div>

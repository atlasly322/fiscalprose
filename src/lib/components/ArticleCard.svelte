<script lang="ts">
	let {
		title,
		slug,
		category,
		excerpt,
		readTime,
		wordCount,
		publishedAt,
		delay = 0
	}: {
		title: string;
		slug: string;
		category: string;
		excerpt: string;
		readTime: string;
		wordCount: number;
		publishedAt: Date | null;
		delay?: number;
	} = $props();

	function formatDate(date: Date | null) {
		if (!date) return '';
		return new Date(date).toLocaleDateString('en-IN', { month: 'short', year: 'numeric' });
	}

	const delayClass = $derived(delay === 1 ? 'delay-1' : delay === 2 ? 'delay-2' : '');
</script>

<a href="/blog/{slug}" class="article-card-link animate {delayClass}">
	<p class="card-category">{category}</p>
	<h3 class="card-title">{title}</h3>
	<p class="card-excerpt">{excerpt}</p>
	<div class="card-meta">
		<span>{formatDate(publishedAt)}</span>
		<span class="read-time">{readTime}</span>
		<span>{wordCount.toLocaleString()} words</span>
	</div>
	<span class="read-cta">Read full article →</span>
</a>

<style>
	.article-card-link {
		border-top: 3px solid var(--ink);
		padding-top: 1.2rem;
		cursor: pointer;
		transition: border-color 0.2s;
		text-decoration: none;
		color: inherit;
		display: block;
		position: relative;
	}

	.article-card-link:hover {
		border-color: var(--gold);
	}

	.article-card-link:hover .card-title {
		color: var(--gold);
	}

	.read-cta {
		display: block;
		font-family: 'DM Mono', monospace;
		font-size: 0.65rem;
		letter-spacing: 0.15em;
		text-transform: uppercase;
		color: var(--gold);
		margin-top: 0.8rem;
		opacity: 0;
		transform: translateY(4px);
		transition: all 0.25s ease;
	}

	.article-card-link:hover .read-cta {
		opacity: 1;
		transform: translateY(0);
	}
</style>

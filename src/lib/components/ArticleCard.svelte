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

<a href="/blog/{slug}" class="article-card animate {delayClass}">
	<p class="card-category">{category}</p>
	<h3 class="card-title">{title}</h3>
	<p class="card-excerpt">{excerpt}</p>
	<div class="card-meta">
		<span>{formatDate(publishedAt)}</span>
		<span class="read-time">{readTime}</span>
		<span>{wordCount.toLocaleString()} words</span>
	</div>
</a>

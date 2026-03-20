<script lang="ts">
	const today = new Date().toLocaleDateString('en-IN', {
		weekday: 'long',
		year: 'numeric',
		month: 'long',
		day: 'numeric'
	});
</script>

<header class="masthead">
	<div class="masthead-top">
		<span>Personal Finance · Markets · Economy · Investment</span>
		<span>{today}</span>
	</div>
	<div class="masthead-main animate">
		<p class="masthead-eyebrow">Finance Writer & Analyst</p>
		<h1 class="site-title"><a href="/" style="text-decoration:none;color:inherit;">Fiscal<span>Prose</span></a></h1>
		<p class="site-tagline">Clarity in numbers. Depth in analysis. Trust in every word.</p>
	</div>
	<nav class="animate delay-1">
		<a href="/">Home</a>
		<a href="/about">About</a>
	</nav>
</header>

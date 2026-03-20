<script lang="ts">
	let { children, data } = $props();
</script>

<svelte:head>
	<title>Admin — FiscalProse</title>
</svelte:head>

<div style="min-height:100vh;background:var(--cream);">
	<header style="background:var(--ink);color:var(--cream);padding:1rem 2rem;display:flex;align-items:center;justify-content:space-between;">
		<div style="display:flex;align-items:center;gap:1.5rem;">
			<a href="/" style="font-family:'Playfair Display',serif;font-size:1.4rem;font-weight:700;color:var(--cream);text-decoration:none;">Fiscal<span style="color:var(--gold);">Prose</span></a>
			<span style="font-family:'DM Mono',monospace;font-size:0.65rem;letter-spacing:0.15em;text-transform:uppercase;color:var(--gold);">Admin</span>
		</div>
		<nav style="display:flex;gap:1.5rem;align-items:center;font-family:'DM Mono',monospace;font-size:0.7rem;letter-spacing:0.1em;">
			<a href="/admin" style="color:#c8c0b4;text-decoration:none;">Dashboard</a>
			<a href="/admin/write" style="color:#c8c0b4;text-decoration:none;">New Post</a>
			<span style="color:var(--muted);">{data.user.email}</span>
			<form method="POST" action="/admin?/signOut" style="display:inline;">
				<button type="submit" style="background:none;border:1px solid #3a3530;color:#9a9088;padding:0.3rem 0.8rem;font-family:'DM Mono',monospace;font-size:0.65rem;letter-spacing:0.1em;text-transform:uppercase;cursor:pointer;">Logout</button>
			</form>
		</nav>
	</header>

	<main style="max-width:1200px;margin:0 auto;padding:2rem clamp(1rem,3vw,2rem);">
		{@render children()}
	</main>
</div>

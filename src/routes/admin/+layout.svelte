<script lang="ts">
	import { goto } from '$app/navigation';
	import { authClient } from '$lib/auth-client';

	let { children, data } = $props();

	async function handleSignOut() {
		await authClient.signOut();
		goto('/login');
	}
</script>

<svelte:head>
	<title>Admin — FiscalProse</title>
</svelte:head>

<div class="admin-shell">
	<header class="admin-header">
		<div class="admin-brand">
			<a href="/" class="admin-logo">Fiscal<span>Prose</span></a>
			<span class="admin-badge">Admin</span>
		</div>
		<nav class="admin-nav">
			<a href="/admin">Dashboard</a>
			<a href="/admin/write">New Post</a>
			<a href="/admin/settings">Settings</a>
			<button onclick={handleSignOut} class="admin-logout">Logout</button>
		</nav>
	</header>

	<main class="admin-main">
		{@render children()}
	</main>
</div>

<style>
	.admin-shell {
		min-height: 100vh;
		background: var(--cream);
	}

	.admin-header {
		background: var(--ink);
		color: var(--cream);
		padding: 1rem 2rem;
		display: flex;
		align-items: center;
		justify-content: space-between;
		flex-wrap: wrap;
		gap: 0.8rem;
	}

	.admin-brand {
		display: flex;
		align-items: center;
		gap: 1rem;
	}

	.admin-logo {
		font-family: 'Playfair Display', serif;
		font-size: 1.4rem;
		font-weight: 700;
		color: var(--cream);
		text-decoration: none;
	}

	.admin-logo span {
		color: var(--gold);
	}

	.admin-badge {
		font-family: 'DM Mono', monospace;
		font-size: 0.65rem;
		letter-spacing: 0.15em;
		text-transform: uppercase;
		color: var(--gold);
	}

	.admin-nav {
		display: flex;
		gap: 1rem;
		align-items: center;
		font-family: 'DM Mono', monospace;
		font-size: 0.7rem;
		letter-spacing: 0.1em;
		flex-wrap: wrap;
	}

	.admin-nav a {
		color: #c8c0b4;
		text-decoration: none;
	}

	.admin-logout {
		background: none;
		border: 1px solid #3a3530;
		color: #9a9088;
		padding: 0.3rem 0.8rem;
		font-family: 'DM Mono', monospace;
		font-size: 0.65rem;
		letter-spacing: 0.1em;
		text-transform: uppercase;
		cursor: pointer;
	}

	.admin-main {
		max-width: 1200px;
		margin: 0 auto;
		padding: 2rem clamp(1rem, 3vw, 2rem);
	}

	@media (max-width: 720px) {
		.admin-header {
			padding: 0.8rem 1rem;
			flex-direction: column;
			align-items: flex-start;
		}

		.admin-nav {
			width: 100%;
			gap: 0.6rem;
			font-size: 0.6rem;
		}

		.admin-main {
			padding: 1rem;
		}
	}
</style>

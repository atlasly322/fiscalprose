<script lang="ts">
	import { enhance } from '$app/forms';

	let { form } = $props();
</script>

<svelte:head>
	<title>Login — FiscalProse</title>
</svelte:head>

<div style="min-height:100vh;display:flex;align-items:center;justify-content:center;background:var(--cream);">
	<div style="width:100%;max-width:400px;padding:2rem;">
		<div style="text-align:center;margin-bottom:2.5rem;">
			<h1 class="site-title" style="font-size:2.5rem;"><a href="/" style="text-decoration:none;color:inherit;">Fiscal<span>Prose</span></a></h1>
			<p style="font-family:'DM Mono',monospace;font-size:0.7rem;letter-spacing:0.15em;color:var(--muted);text-transform:uppercase;margin-top:0.5rem;">Admin Login</p>
		</div>

		<form method="POST" use:enhance style="display:flex;flex-direction:column;gap:1.2rem;">
			<div>
				<label for="email" style="font-family:'DM Mono',monospace;font-size:0.65rem;letter-spacing:0.15em;text-transform:uppercase;color:var(--muted);display:block;margin-bottom:0.4rem;">Email</label>
				<input
					type="email"
					id="email"
					name="email"
					required
					autocomplete="email"
					style="width:100%;padding:0.75rem 1rem;border:1px solid var(--rule);background:var(--parchment);font-family:'Source Serif 4',serif;font-size:1rem;color:var(--ink);"
				/>
			</div>

			<div>
				<label for="password" style="font-family:'DM Mono',monospace;font-size:0.65rem;letter-spacing:0.15em;text-transform:uppercase;color:var(--muted);display:block;margin-bottom:0.4rem;">Password</label>
				<input
					type="password"
					id="password"
					name="password"
					required
					autocomplete="current-password"
					style="width:100%;padding:0.75rem 1rem;border:1px solid var(--rule);background:var(--parchment);font-family:'Source Serif 4',serif;font-size:1rem;color:var(--ink);"
				/>
			</div>

			{#if form?.message}
				<p style="color:var(--rust);font-family:'DM Mono',monospace;font-size:0.75rem;text-align:center;">{form.message}</p>
			{/if}

			<button type="submit" class="btn-primary" style="width:100%;text-align:center;">Sign In</button>
		</form>
	</div>
</div>

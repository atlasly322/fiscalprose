<script lang="ts">
	import { enhance } from '$app/forms';
	import Editor from '$lib/components/admin/Editor.svelte';

	let { form } = $props();
	let contentHtml = $state('');
</script>

<h1 style="font-family:'Playfair Display',serif;font-size:1.8rem;font-weight:700;margin-bottom:2rem;">New Post</h1>

<form method="POST" use:enhance style="display:flex;flex-direction:column;gap:1.2rem;">
	<div>
		<label for="title" style="font-family:'DM Mono',monospace;font-size:0.65rem;letter-spacing:0.15em;text-transform:uppercase;color:var(--muted);display:block;margin-bottom:0.4rem;">Title</label>
		<input type="text" id="title" name="title" required style="width:100%;padding:0.75rem 1rem;border:1px solid var(--rule);background:var(--parchment);font-family:'Playfair Display',serif;font-size:1.4rem;font-weight:700;color:var(--ink);" />
	</div>

	<div style="display:grid;grid-template-columns:1fr 1fr;gap:1rem;">
		<div>
			<label for="category" style="font-family:'DM Mono',monospace;font-size:0.65rem;letter-spacing:0.15em;text-transform:uppercase;color:var(--muted);display:block;margin-bottom:0.4rem;">Category</label>
			<select id="category" name="category" style="width:100%;padding:0.75rem 1rem;border:1px solid var(--rule);background:var(--parchment);font-family:'DM Mono',monospace;font-size:0.8rem;color:var(--ink);">
				<option>Personal Finance</option>
				<option>Markets & Economy</option>
				<option>Investment Analysis</option>
				<option>Tax & Planning</option>
				<option>Explainer</option>
				<option>Startup Finance</option>
			</select>
		</div>
		<div>
			<label for="excerpt" style="font-family:'DM Mono',monospace;font-size:0.65rem;letter-spacing:0.15em;text-transform:uppercase;color:var(--muted);display:block;margin-bottom:0.4rem;">Excerpt</label>
			<textarea id="excerpt" name="excerpt" rows="2" style="width:100%;padding:0.75rem 1rem;border:1px solid var(--rule);background:var(--parchment);font-family:'Source Serif 4',serif;font-size:0.9rem;color:var(--ink);resize:vertical;"></textarea>
		</div>
	</div>

	<div>
		<label for="editor-content" style="font-family:'DM Mono',monospace;font-size:0.65rem;letter-spacing:0.15em;text-transform:uppercase;color:var(--muted);display:block;margin-bottom:0.4rem;">Content</label>
		<Editor onupdate={(html) => (contentHtml = html)} />
		<input type="hidden" id="editor-content" name="content" value={contentHtml} />
	</div>

	<div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:1rem;align-items:end;">
		<div>
			<label for="publishedAt" style="font-family:'DM Mono',monospace;font-size:0.65rem;letter-spacing:0.15em;text-transform:uppercase;color:var(--muted);display:block;margin-bottom:0.4rem;">Publish Date</label>
			<input type="date" id="publishedAt" name="publishedAt" value={new Date().toISOString().split('T')[0]} style="width:100%;padding:0.75rem 1rem;border:1px solid var(--rule);background:var(--parchment);font-family:'DM Mono',monospace;font-size:0.8rem;color:var(--ink);" />
		</div>
		<label style="display:flex;align-items:center;gap:0.5rem;font-family:'DM Mono',monospace;font-size:0.7rem;color:var(--slate);cursor:pointer;padding-bottom:0.75rem;">
			<input type="checkbox" name="featured" />
			Featured
		</label>
		<label style="display:flex;align-items:center;gap:0.5rem;font-family:'DM Mono',monospace;font-size:0.7rem;color:var(--slate);cursor:pointer;padding-bottom:0.75rem;">
			<input type="checkbox" name="published" />
			Publish now
		</label>
	</div>

	{#if form?.message}
		<p style="color:var(--rust);font-family:'DM Mono',monospace;font-size:0.75rem;">{form.message}</p>
	{/if}

	<div>
		<button type="submit" class="btn-primary">Save Post</button>
		<a href="/admin" class="btn-outline">Cancel</a>
	</div>
</form>

<script lang="ts">
	import { enhance } from '$app/forms';
	import Editor from '$lib/components/admin/Editor.svelte';

	let { data, form } = $props();
	let editorHtml = $state('');

	$effect(() => {
		editorHtml = data.article.content;
	});
</script>

<h1 style="font-family:'Playfair Display',serif;font-size:1.8rem;font-weight:700;margin-bottom:2rem;">Edit Post</h1>

<form method="POST" action="?/update" use:enhance style="display:flex;flex-direction:column;gap:1.2rem;">
	<div>
		<label for="title" style="font-family:'DM Mono',monospace;font-size:0.65rem;letter-spacing:0.15em;text-transform:uppercase;color:var(--muted);display:block;margin-bottom:0.4rem;">Title</label>
		<input type="text" id="title" name="title" required value={data.article.title} style="width:100%;padding:0.75rem 1rem;border:1px solid var(--rule);background:var(--parchment);font-family:'Playfair Display',serif;font-size:1.4rem;font-weight:700;color:var(--ink);" />
	</div>

	<div style="display:grid;grid-template-columns:1fr 1fr;gap:1rem;">
		<div>
			<label for="category" style="font-family:'DM Mono',monospace;font-size:0.65rem;letter-spacing:0.15em;text-transform:uppercase;color:var(--muted);display:block;margin-bottom:0.4rem;">Category</label>
			<select id="category" name="category" style="width:100%;padding:0.75rem 1rem;border:1px solid var(--rule);background:var(--parchment);font-family:'DM Mono',monospace;font-size:0.8rem;color:var(--ink);">
				{#each ['Personal Finance', 'Markets & Economy', 'Investment Analysis', 'Tax & Planning', 'Explainer', 'Startup Finance'] as cat}
					<option selected={data.article.category === cat}>{cat}</option>
				{/each}
			</select>
		</div>
		<div>
			<label for="excerpt" style="font-family:'DM Mono',monospace;font-size:0.65rem;letter-spacing:0.15em;text-transform:uppercase;color:var(--muted);display:block;margin-bottom:0.4rem;">Excerpt</label>
			<textarea id="excerpt" name="excerpt" rows="2" style="width:100%;padding:0.75rem 1rem;border:1px solid var(--rule);background:var(--parchment);font-family:'Source Serif 4',serif;font-size:0.9rem;color:var(--ink);resize:vertical;">{data.article.excerpt}</textarea>
		</div>
	</div>

	<div>
		<label for="editor-content" style="font-family:'DM Mono',monospace;font-size:0.65rem;letter-spacing:0.15em;text-transform:uppercase;color:var(--muted);display:block;margin-bottom:0.4rem;">Content</label>
		<Editor content={data.article.content} onupdate={(html) => (editorHtml = html)} />
		<input type="hidden" id="editor-content" name="content" value={editorHtml} />
	</div>

	<div style="display:flex;gap:2rem;align-items:center;">
		<label style="display:flex;align-items:center;gap:0.5rem;font-family:'DM Mono',monospace;font-size:0.7rem;color:var(--slate);cursor:pointer;">
			<input type="checkbox" name="featured" checked={data.article.featured} />
			Featured
		</label>
		<label style="display:flex;align-items:center;gap:0.5rem;font-family:'DM Mono',monospace;font-size:0.7rem;color:var(--slate);cursor:pointer;">
			<input type="checkbox" name="published" checked={data.article.published} />
			Published
		</label>
	</div>

	{#if form?.message}
		<p style="color:var(--rust);font-family:'DM Mono',monospace;font-size:0.75rem;">{form.message}</p>
	{/if}

	<div style="display:flex;gap:0.5rem;">
		<button type="submit" class="btn-primary">Save Changes</button>
		<a href="/admin" class="btn-outline">Cancel</a>
	</div>
</form>

<form method="POST" action="?/delete" use:enhance style="margin-top:1rem;text-align:right;">
	<button type="submit" style="background:none;border:2px solid var(--rust);color:var(--rust);font-family:'DM Mono',monospace;font-size:0.72rem;letter-spacing:0.18em;text-transform:uppercase;padding:0.9rem 2.5rem;cursor:pointer;transition:all 0.2s;">Delete Post</button>
</form>

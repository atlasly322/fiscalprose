<script lang="ts">
	import { enhance } from '$app/forms';

	let { data } = $props();
</script>

<div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:2rem;">
	<h1 style="font-family:'Playfair Display',serif;font-size:1.8rem;font-weight:700;">Dashboard</h1>
	<a href="/admin/write" class="btn-primary" style="font-size:0.65rem;">+ New Post</a>
</div>

<div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(200px,1fr));gap:1rem;margin-bottom:2rem;">
	<div style="background:var(--parchment);border:1px solid var(--rule);padding:1.5rem;">
		<div style="font-family:'Playfair Display',serif;font-size:2rem;font-weight:700;">{data.posts.length}</div>
		<div style="font-family:'DM Mono',monospace;font-size:0.65rem;letter-spacing:0.15em;text-transform:uppercase;color:var(--muted);">Total Posts</div>
	</div>
	<div style="background:var(--parchment);border:1px solid var(--rule);padding:1.5rem;">
		<div style="font-family:'Playfair Display',serif;font-size:2rem;font-weight:700;">{data.posts.filter(p => p.published).length}</div>
		<div style="font-family:'DM Mono',monospace;font-size:0.65rem;letter-spacing:0.15em;text-transform:uppercase;color:var(--muted);">Published</div>
	</div>
	<div style="background:var(--parchment);border:1px solid var(--rule);padding:1.5rem;">
		<div style="font-family:'Playfair Display',serif;font-size:2rem;font-weight:700;">{data.posts.filter(p => !p.published).length}</div>
		<div style="font-family:'DM Mono',monospace;font-size:0.65rem;letter-spacing:0.15em;text-transform:uppercase;color:var(--muted);">Drafts</div>
	</div>
</div>

{#if data.posts.length === 0}
	<p style="color:var(--muted);text-align:center;padding:3rem;">No posts yet. <a href="/admin/write" style="color:var(--gold);">Write your first article.</a></p>
{:else}
	<table style="width:100%;border-collapse:collapse;">
		<thead>
			<tr style="border-bottom:2px solid var(--ink);font-family:'DM Mono',monospace;font-size:0.65rem;letter-spacing:0.15em;text-transform:uppercase;color:var(--muted);">
				<th style="text-align:left;padding:0.8rem 0.5rem;">Title</th>
				<th style="text-align:left;padding:0.8rem 0.5rem;">Category</th>
				<th style="text-align:left;padding:0.8rem 0.5rem;">Status</th>
				<th style="text-align:left;padding:0.8rem 0.5rem;">Date</th>
				<th style="text-align:right;padding:0.8rem 0.5rem;">Actions</th>
			</tr>
		</thead>
		<tbody>
			{#each data.posts as p}
				<tr style="border-bottom:1px solid var(--rule);">
					<td style="padding:0.8rem 0.5rem;">
						<a href="/admin/edit/{p.id}" style="text-decoration:none;color:var(--ink);font-weight:600;">{p.title || 'Untitled'}</a>
					</td>
					<td style="padding:0.8rem 0.5rem;font-family:'DM Mono',monospace;font-size:0.7rem;color:var(--rust);">{p.category}</td>
					<td style="padding:0.8rem 0.5rem;">
						{#if p.published}
							<span style="background:var(--gold);color:#fff;font-family:'DM Mono',monospace;font-size:0.6rem;letter-spacing:0.1em;padding:0.2rem 0.5rem;text-transform:uppercase;">Published</span>
						{:else}
							<span style="background:var(--muted);color:#fff;font-family:'DM Mono',monospace;font-size:0.6rem;letter-spacing:0.1em;padding:0.2rem 0.5rem;text-transform:uppercase;">Draft</span>
						{/if}
					</td>
					<td style="padding:0.8rem 0.5rem;font-family:'DM Mono',monospace;font-size:0.7rem;color:var(--muted);">
						{(p.publishedAt || p.createdAt) ? new Date((p.publishedAt || p.createdAt)!).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' }) : ''}
					</td>
					<td style="padding:0.8rem 0.5rem;text-align:right;">
						<a href="/admin/edit/{p.id}" style="color:var(--gold);font-family:'DM Mono',monospace;font-size:0.65rem;text-decoration:none;margin-right:1rem;">Edit</a>
						<form method="POST" action="?/delete" use:enhance style="display:inline;">
							<input type="hidden" name="id" value={p.id} />
							<button type="submit" style="background:none;border:none;color:var(--rust);font-family:'DM Mono',monospace;font-size:0.65rem;cursor:pointer;text-transform:uppercase;letter-spacing:0.1em;">Delete</button>
						</form>
					</td>
				</tr>
			{/each}
		</tbody>
	</table>
{/if}

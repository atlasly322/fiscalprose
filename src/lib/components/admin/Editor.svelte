<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
	import { Editor } from '@tiptap/core';
	import StarterKit from '@tiptap/starter-kit';
	import Placeholder from '@tiptap/extension-placeholder';

	let { content = '', onupdate }: { content?: string; onupdate?: (html: string) => void } = $props();

	let element: HTMLDivElement;
	let editor: Editor | null = $state(null);

	onMount(() => {
		editor = new Editor({
			element,
			extensions: [
				StarterKit,
				Placeholder.configure({
					placeholder: 'Start writing your article...'
				})
			],
			content,
			editorProps: {
				attributes: {
					style: 'min-height:400px;outline:none;padding:1.5rem;font-family:"Source Serif 4",Georgia,serif;font-size:1rem;line-height:1.7;color:var(--ink);'
				}
			},
			onUpdate: ({ editor: e }) => {
				onupdate?.(e.getHTML());
			}
		});
	});

	onDestroy(() => {
		editor?.destroy();
	});
</script>

<div style="border:1px solid var(--rule);background:var(--cream);margin-bottom:1rem;">
	{#if editor}
		<div style="display:flex;flex-wrap:wrap;gap:0.25rem;padding:0.5rem;border-bottom:1px solid var(--rule);background:var(--parchment);">
			<button type="button" onclick={() => editor?.chain().focus().toggleBold().run()} style="padding:0.3rem 0.6rem;font-family:'DM Mono',monospace;font-size:0.7rem;border:1px solid var(--rule);background:{editor.isActive('bold') ? 'var(--ink)' : 'transparent'};color:{editor.isActive('bold') ? 'var(--cream)' : 'var(--ink)'};cursor:pointer;">
				<strong>B</strong>
			</button>
			<button type="button" onclick={() => editor?.chain().focus().toggleItalic().run()} style="padding:0.3rem 0.6rem;font-family:'DM Mono',monospace;font-size:0.7rem;border:1px solid var(--rule);background:{editor.isActive('italic') ? 'var(--ink)' : 'transparent'};color:{editor.isActive('italic') ? 'var(--cream)' : 'var(--ink)'};cursor:pointer;">
				<em>I</em>
			</button>
			<button type="button" onclick={() => editor?.chain().focus().toggleHeading({ level: 2 }).run()} style="padding:0.3rem 0.6rem;font-family:'DM Mono',monospace;font-size:0.7rem;border:1px solid var(--rule);background:{editor.isActive('heading', { level: 2 }) ? 'var(--ink)' : 'transparent'};color:{editor.isActive('heading', { level: 2 }) ? 'var(--cream)' : 'var(--ink)'};cursor:pointer;">
				H2
			</button>
			<button type="button" onclick={() => editor?.chain().focus().toggleHeading({ level: 3 }).run()} style="padding:0.3rem 0.6rem;font-family:'DM Mono',monospace;font-size:0.7rem;border:1px solid var(--rule);background:{editor.isActive('heading', { level: 3 }) ? 'var(--ink)' : 'transparent'};color:{editor.isActive('heading', { level: 3 }) ? 'var(--cream)' : 'var(--ink)'};cursor:pointer;">
				H3
			</button>
			<button type="button" onclick={() => editor?.chain().focus().toggleBulletList().run()} style="padding:0.3rem 0.6rem;font-family:'DM Mono',monospace;font-size:0.7rem;border:1px solid var(--rule);background:{editor.isActive('bulletList') ? 'var(--ink)' : 'transparent'};color:{editor.isActive('bulletList') ? 'var(--cream)' : 'var(--ink)'};cursor:pointer;">
				List
			</button>
			<button type="button" onclick={() => editor?.chain().focus().toggleOrderedList().run()} style="padding:0.3rem 0.6rem;font-family:'DM Mono',monospace;font-size:0.7rem;border:1px solid var(--rule);background:{editor.isActive('orderedList') ? 'var(--ink)' : 'transparent'};color:{editor.isActive('orderedList') ? 'var(--cream)' : 'var(--ink)'};cursor:pointer;">
				1.
			</button>
			<button type="button" onclick={() => editor?.chain().focus().toggleBlockquote().run()} style="padding:0.3rem 0.6rem;font-family:'DM Mono',monospace;font-size:0.7rem;border:1px solid var(--rule);background:{editor.isActive('blockquote') ? 'var(--ink)' : 'transparent'};color:{editor.isActive('blockquote') ? 'var(--cream)' : 'var(--ink)'};cursor:pointer;">
				Quote
			</button>
			<button type="button" onclick={() => editor?.chain().focus().setHorizontalRule().run()} style="padding:0.3rem 0.6rem;font-family:'DM Mono',monospace;font-size:0.7rem;border:1px solid var(--rule);background:transparent;color:var(--ink);cursor:pointer;">
				—
			</button>
		</div>
	{/if}
	<div bind:this={element}></div>
</div>

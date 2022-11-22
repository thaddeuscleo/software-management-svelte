<script lang="ts">
	import FileDrop from 'filedrop-svelte';
	import type { Files } from 'filedrop-svelte';
	let files: Files;
</script>

<FileDrop
	clickToUpload={false}
	on:filedrop={(e) => {
		files = e.detail.files;
	}}
>
	<div
		class="max-w-full p-10 mx-auto sm:px-6 lg:px-8 border-dashed border-2 border-slate-500 text-center"
	>
		{#if !files}
			Drag file here
		{:else}
			<h3>Accepted files</h3>
			<ul>
				{#each files.accepted as file}
					<li>{file.name}</li>
				{/each}
			</ul>
		{/if}
	</div>
</FileDrop>

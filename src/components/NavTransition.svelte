<script lang="ts">
	import { fly } from 'svelte/transition';

	export let url: URL;
</script>

{#key url.toString().split('?')[0]}
	<div in:fly={{ y: -50, duration: 200, delay: 300 }} out:fly={{ y: -10, duration: 300 }}>
		<slot />
	</div>
{/key}

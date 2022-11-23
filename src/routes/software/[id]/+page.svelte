<script lang="ts">
	import type { Software } from '$lib/models/software';
	import SoftwareDataDetail from './../../../components/SoftwareDataDetail.svelte';

	export let data: {
		software: Software;
	};

	$: ({ software } = data);
</script>

<SoftwareDataDetail {software} />

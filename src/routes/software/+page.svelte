<script lang="ts">
	import type { Software } from '$lib/models/software';
	import SoftwareDataTable from './../../components/SoftwareDataTable.svelte';

	export let data: {
		softwareCount: number;
		take: number;
		numberOfPage: number;
		currentPage: number;
		softwares: Software[];
	};

	const { softwareCount, take, numberOfPage } = data;
	$: currentPage = data.currentPage;
	$: ({ softwares } = data);
</script>

<SoftwareDataTable
	dataCollection={softwares}
	{numberOfPage}
	allDataCount={softwareCount}
	{currentPage}
	{take}
/>

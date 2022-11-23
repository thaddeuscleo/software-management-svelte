<script lang="ts">
	import SoftwareDataTable from './../../components/SoftwareDataTable.svelte';

	export let data: any;
	const { softwareCount, take, numberOfPage } = data;
	$: currentPage = data.currentPage;
	$: ({ softwares } = data.softwares);
</script>


<SoftwareDataTable
	dataCollection={softwares}
	{numberOfPage}
	allDataCount={softwareCount}
	{currentPage}
	{take}
/>

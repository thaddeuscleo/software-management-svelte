<script lang="ts">
	import SoftwareDataTable from './../../components/SoftwareDataTable.svelte';

	export let data: any;
	const take = data.take;
	const { softwareCount } = data.softwareCount;
	const numberOfPage = Math.ceil(softwareCount / take);
	const softwareTableHeaders = ['Room Number', 'Master Type', 'Location'];

	$: currentPage = data.currentPage;
	$: ({ softwares } = data.softwares);
</script>

<SoftwareDataTable
	tableHeaders={softwareTableHeaders}
	dataCollection={softwares}
	{numberOfPage}
	allDataCount={softwareCount}
	{currentPage}
	{take}
/>

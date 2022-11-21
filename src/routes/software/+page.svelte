<script lang="ts">
	import DataTable from '../../components/DataTable.svelte';

	export let data: any;
	const take = data.take;
	const { softwareCount } = data.softwareCount
	const numberOfPage = Math.ceil(softwareCount / take);
	const softwareTableHeaders = ['Room Number', 'Master Type', 'Location', 'Detail'];
	
	$: currentPage = data.currentPage;
	$: ({ softwares } = data.softwares);

</script>


<DataTable
	tableHeaders={softwareTableHeaders}
	dataCollection={softwares}
	{numberOfPage}
	allDataCount={softwareCount}
	{currentPage}
	{take}
/>

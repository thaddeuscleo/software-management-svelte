<script lang="ts">
	import DataTable from '../../components/DataTable.svelte';

	export let data;
	const currentPage = data.currentPage;
	const take = data.take;
	const { softwareCount } = data.softwareCount;
	const { softwares } = data.softwares;
	const numberOfPage = Math.ceil(softwareCount / take);

	const softwareTableHeaders = ['Room Number', 'Master Type', 'Location', 'Detail'];
</script>

<DataTable
	tableHeaders={softwareTableHeaders}
	dataCollection={softwares}
	{numberOfPage}
	allDataCount={softwareCount}
	{currentPage}
	{take}
/>

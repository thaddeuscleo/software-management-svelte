<script lang="ts">
	import DataTable from '../../components/DataTable.svelte';
	const currentPage = 1;

	let softwareTableHeaders = ['Room Number', 'Master Type', 'Location'];
	export let data;
	const take = data.data.take;
	const { softwareCount } = data.data.softwareCount;
	const { softwares } = data.data.softwares;
	const numberOfPage = Math.ceil(softwareCount / take);
</script>

<DataTable
	tableHeaders={softwareTableHeaders}
	dataCollection={softwares}
	{numberOfPage}
	allDataCount={softwareCount}
	{currentPage}
	{take}
/>

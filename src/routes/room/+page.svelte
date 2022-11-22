<script>
	import SoftwareDataTable from '../../components/SoftwareDataTable.svelte';

	const take = 10;
	const currentPage = 1;

	let softwareTableHeaders = ['Room Number', 'Master Type', 'Location'];
	let softwares = [
		{ id: '1', softwareName: 'test', currentLicense: 'true', group: 'autocad' },
		{ id: '2', softwareName: 'test2', currentLicense: 'false', group: 'autocad' },
		{ id: '3', softwareName: 'test3', currentLicense: 'true', group: 'autocad' }
	];
</script>

<SoftwareDataTable
	tableHeaders={softwareTableHeaders}
	dataCollection={softwares}
	numberOfPage={1}
	allDataCount={softwares.length}
	{currentPage}
	{take}
/>

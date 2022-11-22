<script lang="ts">
	import RoomDataTable from './../../components/RoomDataTable.svelte';

	export let data: any;
	let { take, roomCount, numberOfPage } = data;
	$: ({ rooms } = data);
	$: ({ currentPage } = data);
</script>

<RoomDataTable
	dataCollection={rooms}
	allDataCount={roomCount}
	{numberOfPage}
	{currentPage}
	{take}
/>

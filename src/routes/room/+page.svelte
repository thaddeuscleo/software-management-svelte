<script lang="ts">
	import type { Room } from '$lib/models/room';
	import RoomDataTable from './../../components/RoomDataTable.svelte';

	export let data: {
		take: number;
		roomCount: number;
		numberOfPage: number;
		currentPage: number;
		rooms: Room[];
	};

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

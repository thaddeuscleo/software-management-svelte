<script>
	import RoomDataDetail from './../../../components/RoomDataDetail.svelte';

	export let data;
	const { room } = data;
</script>

<RoomDataDetail {room} />

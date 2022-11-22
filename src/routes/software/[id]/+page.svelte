<script lang="ts">
	import SoftwareDataDetail from './../../../components/SoftwareDataDetail.svelte';

	export let data: any;
	$: ({ software } = data.software);
</script>

<SoftwareDataDetail {software} />

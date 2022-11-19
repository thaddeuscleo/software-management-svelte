<script>
	import SideBarNavigation from './../components/SideBarNavigation.svelte';
	import '../app.css';
	import Header from './../components/Header.svelte';
</script>

<div class="flex">
	<SideBarNavigation />
	<div class="p-10 w-full bg-violet-50">
		<Header />

		<slot />
	</div>
</div>

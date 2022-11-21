<script>
	import SideBarNavigation from './../components/SideBarNavigation.svelte';
	import '../app.css';
	import Header from './../components/Header.svelte';
	import NavTransition from './../components/NavTransition.svelte';
	import { page } from '$app/stores';
</script>

<div class="flex">
	<SideBarNavigation />
	<div class="p-10 w-full bg-violet-50">
		<NavTransition url={$page.url}>
			<Header />
			<slot />
		</NavTransition>
	</div>
</div>

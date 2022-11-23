<script lang="ts">
	import { page } from '$app/stores';
	import { Exclamation, Icon, X } from 'svelte-hero-icons';
</script>

<div class="bg-red-600 rounded-md">
	<div class="max-w-7xl mx-auto py-3 px-3 sm:px-6 lg:px-8">
		<div class="flex items-center justify-between flex-wrap">
			<div class="w-0 flex-1 flex items-center">
				<span class="flex p-2 rounded-lg bg-red-800">
					<Icon src={Exclamation} class="h-6 w-6 text-white" aria-hidden="true" />
				</span>
				<p class="ml-3 font-medium text-white truncate">
					<span class="md:hidden">We announced a new product!</span>
					<span class="hidden md:inline"
						>{$page.error?.message}</span
					>
				</p>
			</div>
		</div>
	</div>
</div>
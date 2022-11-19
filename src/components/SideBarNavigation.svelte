<script lang="ts">
	import { Calendar, ChartBar, Folder, Home, Icon, Inbox, User } from 'svelte-hero-icons';

	const navigationList = [
		{ name: 'Dashboard', icon: Home, href: '/', count: 4, current: false },
		{
			name: 'Softwares',
			icon: User,
			href: '/software?currentPage=1',
			count: 3,
			current: false
		},
		{
			name: 'Rooms',
			icon: Folder,
			href: '/room?currentPage=1',
			count: 4,
			current: false
		},
		{
			name: 'Courses',
			icon: Calendar,
			href: '/course',
			count: 4,
			current: false
		},
		{
			name: 'Upload',
			icon: Inbox,
			href: '/upload',
			count: 12,
			current: false
		},
		{ name: 'Reports', icon: ChartBar, href: '#', count: 4, current: false }
	];
</script>

<div>
	<div class="flex flex-col w-64 min-h-screen sticky top-0">
		<div class="flex flex-col flex-grow pt-8 pb-4 bg-white overflow-y-auto">
			<div class="flex items-center flex-shrink-0 px-4">
				<img class="h-8 w-auto" src="#" alt="Workflow" />
			</div>
			<div class="mt-5 flex-grow flex flex-col">
				<nav class="flex-1 px-2 bg-white space-y-1" aria-label="Sidebar">
					{#each navigationList as navigation}
						<a
							href={navigation.href}
							class="text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-2 py-2 text-sm font-medium rounded-md"
						>
							<Icon class="text-gray-500 mr-3 h-6 w-6" src={navigation.icon} />
							{navigation.name}
							<span
								class="bg-gray-100 group-hover:bg-gray-200 ml-auto inline-block py-0.5 px-3 text-xs font-medium rounded-full"
							>
								{navigation.count}
							</span>
						</a>
					{/each}
				</nav>
			</div>
		</div>
	</div>
</div>

<script lang="ts">
	import type { Room } from '$lib/models/room';
	import { Chip, Icon } from 'svelte-hero-icons';

	export let room: Room;
</script>

<div class="bg-white shadow overflow-hidden sm:rounded-lg">
	<div class="px-4 py-5 sm:px-6">
		<h3 class="text-lg leading-6 font-medium text-gray-900">Room Information</h3>
		<p class="mt-1 max-w-2xl text-sm text-gray-500">Room details and softwares.</p>
	</div>
	<div class="border-t border-gray-200 px-4 py-5 sm:p-0">
		<dl class="sm:divide-y sm:divide-gray-200">
			<div class="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
				<dt class="text-sm font-medium text-gray-500">Room Name</dt>
				<dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{room.roomNumber}</dd>
			</div>
			<div class="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
				<dt class="text-sm font-medium text-gray-500">Room Note</dt>
				<dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">-</dd>
			</div>

			<div class="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
				<dt class="text-sm font-medium text-gray-500">Softwares</dt>
				<dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
					<ul class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
						{#each room.softwares as software}
							<li class="border border-gray-200 col-span-1 bg-white rounded-lg">
								<div class="w-full flex items-center justify-between p-4 space-x-3">
									<Icon src={Chip} class="flex-shrink-0 h-5 w-5 text-gray-400" />
									<span class="ml-2 flex-1 w-0 text-center truncate">
										{software.softwareName}
									</span>
								</div>
							</li>
						{/each}
					</ul>
				</dd>
			</div>
		</dl>
	</div>
</div>

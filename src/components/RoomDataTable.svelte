<script lang="ts">
	import type { Room } from '$lib/models/room';
	import { ChevronLeft, ChevronRight, Icon } from 'svelte-hero-icons';

	const tableHeaders = ['Room Number'];
	export let dataCollection: Room[];
	export let allDataCount: number;
	export let numberOfPage: number;
	export let currentPage: number;
	export let take: number;
</script>

<div class="flex flex-col">
	<div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
		<div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
			<div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
				<table class="min-w-full divide-y divide-gray-200">
					<thead class="bg-gray-50">
						<tr>
							{#each tableHeaders as header}
								<th
									scope="col"
									class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
								>
									{header}
								</th>
							{/each}
							<th scope="col" class="relative px-6 py-3">
								<span class="sr-only">Edit</span>
							</th>
						</tr>
					</thead>
					<tbody>
						{#each dataCollection as data, idx}
							<tr class={idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
								<td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
									{data.roomNumber}
								</td>
								<td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
									<a href={`/room/${data.id}`} class="text-indigo-600 hover:text-indigo-900">
										Detail
									</a>
								</td>
							</tr>
						{/each}
					</tbody>
				</table>

				<div
					class="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6"
				>
					<div class="flex-1 flex justify-between sm:hidden">
						<a
							href="/"
							class="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:text-gray-500"
						>
							Previous
						</a>
						<a
							href="/"
							class="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:text-gray-500"
						>
							Next
						</a>
					</div>
					<div class="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
						<div>
							<p class="text-sm text-gray-700">
								Showing{' '}
								<span class="font-medium">
									{(currentPage - 1) * take + 1}
								</span>{' '}
								to{' '}
								<span class="font-medium">
									{(Number(currentPage) - 1) * take + dataCollection.length}
								</span>{' '}
								of <span class="font-medium">{allDataCount}</span>{' '}
								results
							</p>
						</div>
						{#if numberOfPage != 0}
							<div>
								<nav
									class="relative z-0 inline-flex rounded-md shadow-sm -space-x-px"
									aria-label="Pagination"
								>
									<a
										href={`/room?currentPage=${currentPage - 1}`}
										class="{currentPage == 1
											? 'pointer-events-none bg-slate-300'
											: ''} relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
									>
										<span class="sr-only">Previous</span>
										<Icon src={ChevronLeft} class="h-5 w-5" aria-hidden="true" />
									</a>
									{#each Array(numberOfPage) as _, idx}
										<a
											data-sveltekit-prefetch
											href={`/room?currentPage=${idx + 1}`}
											class="{idx + 1 != currentPage
												? 'bg-white'
												: 'text-white bg-indigo-500 hover:bg-indigo-600'} relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium text-gray-700 hover:bg-gray-50"
										>
											{idx + 1}
										</a>
									{/each}
									<a
										href={`/room?currentPage=${currentPage + 1}`}
										class="{currentPage == numberOfPage
											? 'pointer-events-none bg-slate-300'
											: ''} relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
									>
										<span class="sr-only">Next</span>
										<Icon src={ChevronRight} class="h-5 w-5" aria-hidden="true" />
									</a>
								</nav>
							</div>
						{/if}
					</div>
				</div>
			</div>
		</div>
	</div>
</div>

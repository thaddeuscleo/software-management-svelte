<script lang="ts">
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';

	import { ChevronLeft, ChevronRight, Icon } from 'svelte-hero-icons';

	export let tableHeaders: string[];
	export let dataCollection: any[];
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
						</tr>
					</thead>
					<tbody>
						{#each dataCollection as data, idx}
							<tr class={idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
								<td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
									{data.softwareName}
								</td>
								<td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
									{data.currentLicense}
								</td>
								<td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
									{data.group}
								</td>
								<td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
									<a href={`/software/${data.id}`} class="text-indigo-600 hover:text-indigo-900">
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
										href="/"
										class="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
									>
										<span class="sr-only">Previous</span>
										<Icon src={ChevronLeft} class="h-5 w-5" aria-hidden="true" />
									</a>
									{#each Array(numberOfPage) as _, idx}
										<a
											data-sveltekit-prefetch
											href={`/software?currentPage=${idx + 1}`}
											class="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
										>
											{idx + 1}
										</a>
									{/each}
									<a
										href="/"
										class="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
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

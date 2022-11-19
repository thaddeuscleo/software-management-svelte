<script lang="ts">
	const stats = [
		{ name: 'Total Subscribers', stat: '71,897' },
		{ name: 'Avg. Open Rate', stat: '58.16%' },
		{ name: 'Avg. Click Rate', stat: '24.57%' }
	];
</script>

<div class="mt-10">
	<h3 class="text-lg leading-6 font-medium text-gray-900">Total Software</h3>
	<dl class="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-3">
		{#each stats as stat}
			<div class="px-4 py-5 bg-white shadow rounded-lg overflow-hidden sm:p-6">
				<dt class="text-sm font-medium text-gray-500 truncate">
					{stat.name}
				</dt>
				<dd class="mt-1 text-3xl font-semibold text-gray-900">
					{stat.stat}
				</dd>
			</div>
		{/each}
	</dl>
</div>

<hr />

<div class="mt-10">
	<h3 class="text-lg leading-6 font-medium text-gray-900">Total Rooms</h3>
	<dl class="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-3">
		{#each stats as stat}
			<div class="px-4 py-5 bg-white shadow rounded-lg overflow-hidden sm:p-6">
				<dt class="text-sm font-medium text-gray-500 truncate">
					{stat.name}
				</dt>
				<dd class="mt-1 text-3xl font-semibold text-gray-900">
					{stat.stat}
				</dd>
			</div>
		{/each}
	</dl>
</div>

<hr />

<div class="mt-10">
	<h3 class="text-lg leading-6 font-medium text-gray-900">Total Courses</h3>
	<dl class="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-3">
		{#each stats as stat}
			<div class="px-4 py-5 bg-white shadow rounded-lg overflow-hidden sm:p-6">
				<dt class="text-sm font-medium text-gray-500 truncate">
					{stat.name}
				</dt>
				<dd class="mt-1 text-3xl font-semibold text-gray-900">
					{stat.stat}
				</dd>
			</div>
		{/each}
	</dl>
</div>

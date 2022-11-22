<script lang="ts">
	import { Clipboard, Cube, Icon } from 'svelte-hero-icons';
	import { SvelteToast, toast } from '@zerodevx/svelte-toast';

	export let software: any;

	const copyToClipboard = () => {
		navigator.clipboard.writeText(software.installerPath);
		toast.push('Installer path copied !', { target: 'copied' });
	};
</script>

<SvelteToast target="copied" options={{ intro: { y: -64 } }} />

<div class="bg-white shadow overflow-hidden sm:rounded-lg">
	<div class="px-4 py-5 sm:px-6">
		<h3 class="text-lg leading-6 font-medium text-gray-900">Applicant Information</h3>
		<p class="mt-1 max-w-2xl text-sm text-gray-500">Personal details and application.</p>
	</div>
	<div class="border-t border-gray-200 px-4 py-5 sm:p-0">
		<dl class="sm:divide-y sm:divide-gray-200">
			<div class="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
				<dt class="text-sm font-medium text-gray-500">Software Name</dt>
				<dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{software.softwareName}</dd>
			</div>
			<div class="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
				<dt class="text-sm font-medium text-gray-500">Group</dt>
				<dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{software.group}</dd>
			</div>
			<div class="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
				<dt class="text-sm font-medium text-gray-500">License Status</dt>
				<dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{software.license}</dd>
			</div>
			<div class="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
				<dt class="text-sm font-medium text-gray-500">Current License</dt>
				<dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{software.currentLicense}</dd>
			</div>
			<div class="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
				<dt class="text-sm font-medium text-gray-500">Note</dt>
				<dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
					{software.note}
				</dd>
			</div>
			<div class="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
				<dt class="text-sm font-medium text-gray-500">Installer Path</dt>
				<dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
					<ul class="border border-gray-200 rounded-md divide-y divide-gray-200">
						<li class="pl-3 pr-4 py-3 flex items-center justify-between text-sm">
							<div class="w-0 flex-1 flex items-center">
								<Icon src={Clipboard} class="flex-shrink-0 h-5 w-5 text-gray-400" />
								<span class="ml-2 flex-1 w-0 truncate"> {software.installerPath} </span>
							</div>
							<div class="ml-4 flex-shrink-0">
								<button
									on:click={copyToClipboard}
									class="font-medium text-indigo-600 hover:text-indigo-500"
								>
									copy
								</button>
							</div>
						</li>
					</ul>
				</dd>
			</div>

			<div class="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
				<dt class="text-sm font-medium text-gray-500">Rooms</dt>
				<dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
					<ul class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
						{#each software.rooms as room}
							<li class="border border-gray-200 col-span-1 bg-white rounded-lg">
								<div class="w-full flex items-center justify-between p-4 space-x-3">
									<Icon src={Cube} class="flex-shrink-0 h-5 w-5 text-gray-400" />
									<span class="ml-2 flex-1 w-0 text-center truncate"> {room.roomNumber} </span>
								</div>
							</li>
						{/each}
					</ul>
				</dd>
			</div>
		</dl>
	</div>
</div>

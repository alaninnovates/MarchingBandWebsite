<script>
	import { base } from '$app/paths';
	import NavbarLink from '$lib/NavbarLink.svelte';

	/**
	 * @type {any[]}
	 */
	export let links = [];

	let screenSize = 0;
	let menuExpanded = false;
	function toggleExpanded() {
		menuExpanded = !menuExpanded;
	}
</script>

<svelte:window bind:innerWidth={screenSize} />

<nav class="flex items-center justify-between flex-wrap p-4">
	<!-- Logo -->
	<div class="text-white">
		<a href="{base}/">
			<!-- Put actual logo in here -->
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				stroke-width="1.5"
				stroke="currentColor"
				class="w-6 h-6"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					d="M9 9l10.5-3m0 6.553v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 11-.99-3.467l2.31-.66a2.25 2.25 0 001.632-2.163zm0 0V2.25L9 5.25v10.303m0 0v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 01-.99-3.467l2.31-.66A2.25 2.25 0 009 15.553z"
				/>
			</svg>
		</a>
	</div>
	<!-- Nav Links -->
	<div
		class="absolute sm:relative w-48 sm:w-auto sm:h-auto top-0 right-0 px-3 bg-black sm:bg-transparent z-0 rounded-bl-lg"
	>
		{#if screenSize >= 640 || menuExpanded}
			{#each links as link}
				<NavbarLink href={link.href}>{link.label}</NavbarLink>
			{/each}
		{/if}
	</div>
	<!-- Button -->
	<div class="block sm:hidden z-10">
		<button
			class="flex items-center px-3 py-2 border rounded text-white border-white hover:text-gray-100 hover:border-gray-100"
			on:click={toggleExpanded}
		>
			<svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"
				><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg
			>
		</button>
	</div>
</nav>

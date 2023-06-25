<script>
	/**
	 * @type {string}
	 */
	export let src = '';
	export let alt = '';
	export let label = '';
</script>

<svelte:head>
	<link rel="preload" as="image" href={src} />
</svelte:head>

<div class="relative mx-2 text-white rounded-3xl overflow-hidden">
	<img class="h-full" {src} {alt} />
	{#if label != ''}
		<div class="absolute bottom-0 py-2 ps-3 bg-black/40 w-full">
			{label}
		</div>
	{/if}
</div>

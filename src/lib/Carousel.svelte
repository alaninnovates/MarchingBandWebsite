<script>
	/**
	 * @type {any}
	 */
	export let images = [];
	import CarouselImage from '$lib/CarouselImage.svelte';
</script>

<div class="relative flex overflow-x-hidden">
	<div class="relative flex py-12 animate-marquee whitespace-nowrap min-w-max h-80">
		{#each images as image}
			<CarouselImage src={image.src} alt={image.alt} />
		{/each}
	</div>

	<div class="absolute top-0 flex py-12 animate-marquee2 whitespace-nowrap min-w-max h-80">
		{#each images as image}
			<CarouselImage src={image.src} alt={image.alt} />
		{/each}
	</div>
</div>

<script>
	/**
	 * @type {any}
	 */
	export let images = [];
	import CarouselImage from '$lib/CarouselImage.svelte';
</script>

<div class="mt-10">
	<div class="font-bold text-center text-2xl mb-4">
		<span class=" p-2">Photos</span>
	</div>
	<div class="relative flex overflow-x-hidden">
		<div class="relative flex animate-marquee whitespace-nowrap min-w-max h-60">
			{#each images as image}
				<CarouselImage src={image.src} alt={image.alt} />
			{/each}
		</div>

		<div class="absolute top-0 flex animate-marquee2 whitespace-nowrap min-w-max h-60">
			{#each images as image}
				<CarouselImage src={image.src} alt={image.alt} />
			{/each}
		</div>
	</div>
</div>

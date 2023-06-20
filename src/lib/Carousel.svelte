<script>
	import CarouselImage from '$lib/CarouselImage.svelte';
	import Heading from '$lib/Heading.svelte';

	/**
	 * @type {any}
	 */
	export let images = [];
	export let id = 'photos';
</script>

<div class="">
	<Heading {id}>Photos</Heading>
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

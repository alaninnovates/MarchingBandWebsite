<script>
	import CarouselImage from '$lib/CarouselImage.svelte';
	import Heading from '$lib/Heading.svelte';

	/**
	 * @type {any}
	 */
	export let images = [];
	export let id = 'photos';
</script>

<div class="mt-16">
	<Heading {id}>Marching band members travel to all sorts of exotic places!</Heading>
	<div class="mt-6 relative flex overflow-x-hidden">
		<div class="relative flex flex-row-reverse animate-marquee whitespace-nowrap min-w-max">
			{#each images as image}
				<CarouselImage {...image} />
			{/each}
		</div>

		<div class="absolute top-0 flex flex-row-reverse animate-marquee2 whitespace-nowrap min-w-max">
			{#each images as image}
				<CarouselImage {...image} />
			{/each}
		</div>
	</div>
</div>

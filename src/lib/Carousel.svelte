<script>
	import CarouselImage from '$lib/CarouselImage.svelte';
	import Heading from '$lib/Heading.svelte';

	/**
	 * @type {any}
	 */
	export let images = [];
	export let id = 'photos';

	/**
	 * @type {HTMLDivElement}
	 */
	let marquee;

	/**
	 * @type {HTMLDivElement}
	 */
	let marquee2;

	function handleMouseEnter() {
		marquee.style.animationPlayState = 'paused';
		marquee2.style.animationPlayState = 'paused';
	}

	function handleMouseLeave() {
		marquee.style.animationPlayState = 'running';
		marquee2.style.animationPlayState = 'running';
	}
</script>

<div class="mt-16">
	<Heading {id}>Marching band members travel to all sorts of exotic places!</Heading>
	<div class="mt-6 relative flex overflow-x-hidden">
		<div
			class="relative flex flex-row animate-marquee whitespace-nowrap min-w-max"
			bind:this={marquee}
			on:mouseenter={handleMouseEnter}
			on:mouseleave={handleMouseLeave}
		>
			{#each images as image}
				<CarouselImage {...image} />
			{/each}
		</div>

		<div
			class="absolute top-0 flex flex-row animate-marquee2 whitespace-nowrap min-w-max"
			bind:this={marquee2}
			on:mouseenter={handleMouseEnter}
			on:mouseleave={handleMouseLeave}
		>
			{#each images as image}
				<CarouselImage {...image} />
			{/each}
		</div>
	</div>
</div>

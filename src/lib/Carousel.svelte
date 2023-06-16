<script>
	import CarouselImage from '$lib/CarouselImage.svelte';
</script>

<div class="relative flex overflow-x-hidden">
	<div class="relative flex py-12 animate-marquee whitespace-nowrap min-w-max h-80">
		<CarouselImage src="/images/car1.jpeg" />
		<CarouselImage src="/images/car2.jpeg" />
		<CarouselImage src="/images/car3.jpeg" />
		<CarouselImage src="/images/car4.jpeg" />
		<CarouselImage src="/images/car5.jpeg" />
	</div>

	<div class="absolute top-0 flex py-12 animate-marquee2 whitespace-nowrap min-w-max h-80">
		<CarouselImage src="/images/car1.jpeg" />
		<CarouselImage src="/images/car2.jpeg" />
		<CarouselImage src="/images/car3.jpeg" />
		<CarouselImage src="/images/car4.jpeg" />
		<CarouselImage src="/images/car5.jpeg" />
	</div>
</div>

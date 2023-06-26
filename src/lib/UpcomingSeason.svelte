<script>
	import { base } from '$app/paths';

	export let src = '/images/winning.png';
</script>

<div class="my-10 flex flex-col-reverse md:flex-row bg-cover bg-bottom overflow-hidden justify-end">
	<div class="flex flex-col justify-center p-10 bg-white md:w-[50%]">
		<div class="text-5xl font-header mb-3">Our 2023 season is almost here!</div>
		<div class="text-xl">
			Become a part of the award winning LAHS Eagle Marching Band and Color Guard today!
		</div>
	</div>
	<div
		class="clipped bg-cover bg-[url('/images/sunset.jpg')] inline-block h-48 md:h-96 md:w-[50%] max-w-4xl bg-center"
	>
		<!-- <img {src} class="object-cover" alt="Drum majors and color guard stand in front of trophies." /> -->
	</div>
</div>

<style>
	.clipped {
		clip-path: polygon(25% 0, 100% 0, 100% 100%, 0% 100%);
	}
</style>

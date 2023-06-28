<script>
	import { base } from '$app/paths';
	export let id = 'why';
</script>

<svelte:head>
	<link rel="preload" as="image" href="{base}/images/whymarchingband.webp" />
</svelte:head>

<div
	{id}
	class="w-full sm:grid sm:grid-cols-[40%_60%] xl:grid-cols-2 md:grid-rows-1 bg-mblue mt-10 text-white py-10 overflow-hidden"
>
	<div class="mx-8 mb-3 sm:m-0 sm:col-span-1 flex justify-end items-center">
		<img
			class="h-full max-h-[41rem] object-cover"
			src="{base}/images/whymarchingband.webp"
			alt="Group selfie of marching band members."
		/>
	</div>
	<div class="mx-8 flex justify-start items-center min-w-min">
		<div class="max-w-3xl">
			<div class="text-2xl font-header mb-3">Why marching band?</div>
			<div>
				The marching band community is a welcoming one, and anyone who joins soon becomes a part of
				our diverse and supportive student network. Through band, students are able to bond with
				each other via rehearsals, retreats, and our many events over the course of the season. They
				not only develop instrumental skills, but also learn the importance of teamwork, as well as
				what it takes to produce an entire field show. (Plus, you’ll get some PE credit* out of it!)
			</div>
			<div class="mt-3 italic">But don’t just take our word for it:</div>
			<div class="pb-[56.25%] relative">
				<iframe
					loading="lazy"
					width="100%"
					height="100%"
					src="https://www.youtube-nocookie.com/embed/CuHgPlsjy2E"
					title="YouTube video player"
					frameborder="0"
					allow="autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
					allowfullscreen
					class="absolute"
				/>
			</div>
			<div class="mt-3 text-sm">*Not available for freshmen</div>
		</div>
	</div>
</div>

<style>
	img {
		height: 100%;
	}
</style>

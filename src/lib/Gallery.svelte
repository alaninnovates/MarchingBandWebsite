<script>
	/**
	 * @type {any[]}
	 */
	export let photos = [];

	import Heading from './Heading.svelte';
	import Photo from './Photo.svelte';
</script>

<Heading>Marching band members travel to all sorts of exotic places!</Heading>
<div class="flex justify-center w-full">
	<div class="flex flex-wrap justify-center items-center max-w-[1000px]">
		{#each photos as photo}
			<Photo {...photo} />
		{/each}
	</div>
</div>

<script>
	/**
	 * @type {any[]}
	 */
	export let photos = [];

	import Heading from './Heading.svelte';
	import Photo from './Photo.svelte';
</script>

<Heading>Marching band members travel to all sorts of exotic places!</Heading>
<div class="flex flex-wrap justify-center items-center">
	{#each photos as photo}
		<Photo {...photo} />
	{/each}
</div>

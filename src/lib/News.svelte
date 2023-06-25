<script>
	import Article from './Article.svelte';
	import Heading from './Heading.svelte';

	/**
	 * @type {any[]}
	 */
	export let articles = [];
	export let id = 'news';
</script>

<div class="mt-24">
	<Heading {id}>See what people are saying...</Heading>
	<div class="flex flex-wrap justify-center">
		{#each articles as article}
			<Article {...article} />
		{/each}
	</div>
</div>

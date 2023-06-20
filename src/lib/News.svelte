<script>
	import Article from './Article.svelte';
	import Heading from './Heading.svelte';

	/**
	 * @type {any[]}
	 */
	export let articles = [];
	export let id = 'news';
</script>

<div>
	<Heading {id}>See what people are saying...</Heading>
	<div class="flex flex-wrap justify-around">
		{#each articles as article}
			<Article {...article} />
		{/each}
	</div>
</div>

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
	<div class="mt-5 flex flex-wrap justify-center gap-y-5 gap-x-5">
		{#each articles as article}
			<Article {...article} />
		{/each}
	</div>
</div>

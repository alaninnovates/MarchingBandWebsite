<script>
	/**
	 * @type {any[]}
	 */
	export let questions = [];

	import Heading from './Heading.svelte';
	import Question from './Question.svelte';
</script>

<div class="mb-8"><Heading>FAQ</Heading></div>
<div class="w-full flex flex-col items-center justify-center">
	{#each questions as question}
		<Question {...question} />
	{/each}
</div>

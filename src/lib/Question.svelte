<script>
	import { slide } from 'svelte/transition';
	export let question = '';
	export let answer = '';

	export let expanded = false; //change

	function toggleExpand() {
		expanded = !expanded;
	}
</script>

<div class="w-full max-w-4xl mb-4">
	<div class="text-black flex justify-between items-center mb-4" on:click={toggleExpand}>
		<div class="font-bold me-3">{question}</div>

		<!-- plus button -->
		<div hidden={expanded}>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				stroke-width="1.5"
				stroke="currentColor"
				class="w-6 h-6"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
				/>
			</svg>
		</div>
		<!-- minus button -->
		<div hidden={!expanded}>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				stroke-width="1.5"
				stroke="currentColor"
				class="w-6 h-6"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
				/>
			</svg>
		</div>
	</div>
	{#if expanded}
		<div class="text-sm text-gray-600 me-12 mb-3" transition:slide>{answer}</div>
	{/if}
	<hr />
</div>

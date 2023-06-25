<script>
	export let src = '';
	export let alt = '';
	export let label = '';
</script>

<div class="relative text-white h-48 m-2">
	<img {src} {alt} class="h-48" />
	{#if label != ''}
		<div class="absolute bottom-0 p-2 bg-black/40 w-full">
			{label}
		</div>
	{/if}
</div>

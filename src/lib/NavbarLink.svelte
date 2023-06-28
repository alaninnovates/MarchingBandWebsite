<script>
	export let href = '';
	export let menuExpanded = false;
</script>

<a
	{href}
	class="p-2 m-1 text-white block sm:inline-block hover:underline"
	on:click={() => {
		menuExpanded = false;
	}}
>
	<slot />
</a>

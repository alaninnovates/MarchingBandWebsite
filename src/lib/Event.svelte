<script>
	export let name = '';
	export let date = new Date();
	export let end_date;
</script>

<div class="my-2">
	<div>{name}</div>
	<div class="text-sm">
		{date.toLocaleDateString('en-US', { month: 'long', year: 'numeric', day: 'numeric' })}
		{#if end_date}
			- {end_date.toLocaleDateString('en-US', { month: 'long', year: 'numeric', day: 'numeric' })}
		{/if}
	</div>
</div>

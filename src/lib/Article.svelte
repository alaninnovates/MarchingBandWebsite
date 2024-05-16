<script>
	export let title = '';
	export let website = '';
	export let date = new Date();
	export let image_src = '';
	export let image_alt = '';
	export let href = '';
</script>

<div class="inline-block w-60 overflow-clip">
	<a {href}>
		<div class="w-full h-40 object-cover overflow-hidden">
			<img src={image_src} alt={image_alt} />
		</div>
		<div class="mt-2 text-sm">
			<span class="text-mblue-light uppercase font-bold">{website}</span>
		</div>
		<div class="text-xl">
			{title}
		</div>
		<div class="text-sm">
			{date.toLocaleDateString('en-US', { month: 'long', year: 'numeric', day: 'numeric' })}
		</div>
	</a>
</div>

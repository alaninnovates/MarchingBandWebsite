<script>
	export let name = '';
	export let role = '';
	export let blurb = '';
	export let email = '';
	export let src = '';
</script>

<div class="flex-col">
	<img {src} alt={name} class="rounded-full h-48 w-48 object-cover" />
	<div class="mt-3 flex-col justify-between items-center text-center">
		<div class="text-xl font-bold">
			{name}
		</div>
		<div class="text-md italic">
			{role}
		</div>
		<div class="text-md italic underline text-blue-500">
			<a href={'mailto:' + email}>{email}</a>
		</div>
	</div>
</div>

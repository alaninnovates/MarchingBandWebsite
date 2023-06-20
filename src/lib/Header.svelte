<script>
	import Navbar from '$lib/Navbar.svelte';

	/**
	 * @type {any[]}
	 */
	export let links = [];
</script>

<div class="w-full h-[50rem] bg-cover bg-center bg-blend-darken bg-header">
	<div class="bg-black"><Navbar {links} /></div>
	<div class="w-full h-full bg-gradient-to-b from-black">
		<div class="flex h-full w-full items-center justify-center pb-10">
			<div class="text-center p-10">
				<h1 class="text-4xl text-white font-extrabold font-display">
					Los Altos High School Marching Band
				</h1>
				<button class="rounded-md bg-blue-600 text-white px-5 py-3 mt-3">Sign Up</button>
			</div>
		</div>
	</div>
</div>

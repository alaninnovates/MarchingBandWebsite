<script>
	import { base } from '$app/paths';

	import Navbar from '$lib/Navbar.svelte';

	/**
	 * @type {any[]}
	 */
	export let links = [];
</script>

<div
	class="w-full max-h-[100lvh] h-[50rem] bg-cover bg-center bg-blend-darken bg-[url('/images/header.webp')]"
>
	<div class="flex flex-col w-full h-full bg-gradient-to-b from-black">
		<Navbar {links} />
		<div class="flex h-full w-full items-center justify-center px-12">
			<div class="text-center p-10">
				<span class="block text-3xl text-white font-extrabold font-display italic pb-3">
					Los Altos High School
				</span>
				<span class="block text-6xl md:text-7xl text-white font-extrabold font-display">
					Marching Band and Color Guard
				</span>
				<br />
				<a href="#join" class="inline-block rounded-md outline text-white px-5 py-3 mt-3"
					>Join us!</a
				>
			</div>
		</div>
	</div>
</div>

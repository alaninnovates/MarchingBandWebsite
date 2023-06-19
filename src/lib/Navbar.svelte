<script>
	import NavbarLink from '$lib/NavbarLink.svelte';
</script>

<nav class="flex items-center justify-between flex-wrap p-4">
	<div>
		<a href="">
			<!-- Put actual logo in here -->
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
					d="M9 9l10.5-3m0 6.553v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 11-.99-3.467l2.31-.66a2.25 2.25 0 001.632-2.163zm0 0V2.25L9 5.25v10.303m0 0v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 01-.99-3.467l2.31-.66A2.25 2.25 0 009 15.553z"
				/>
			</svg>
		</a>
	</div>
	<div class="block hidden">
		<button
			class="flex items-center px-3 py-2 border rounded text-black border-black hover:text-gray-600 hover:border-gray-600"
			id="menu-button"
		>
			<svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"
				><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg
			>
		</button>
	</div>
	<div>
		<NavbarLink>Photos</NavbarLink>
		<NavbarLink>Staff</NavbarLink>
		<NavbarLink>News</NavbarLink>
		<NavbarLink>Sign Up</NavbarLink>
		<NavbarLink>Members</NavbarLink>
	</div>
</nav>

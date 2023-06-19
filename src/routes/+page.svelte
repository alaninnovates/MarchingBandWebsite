<script>
	import DATA from '$lib/data.js';
	import Navbar from '$lib/Navbar.svelte';
	import Header from '$lib/Header.svelte';
	import Carousel from '$lib/Carousel.svelte';
</script>

<Navbar />
<Header />
<Carousel images={DATA.IMAGE_DATA.IMAGES_LIST} />

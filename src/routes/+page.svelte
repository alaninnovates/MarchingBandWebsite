<script>
	import DATA from '$lib/data.js';
	import Navbar from '$lib/Navbar.svelte';
	import Header from '$lib/Header.svelte';
	import About from '$lib/About.svelte';
	import Carousel from '$lib/Carousel.svelte';
	import Video from '$lib/Video.svelte';
</script>

<Navbar />
<Header />
<About />
<Carousel images={DATA.IMAGE_DATA.IMAGES_LIST} />
<Video />

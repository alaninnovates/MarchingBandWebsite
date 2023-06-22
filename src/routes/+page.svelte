<script>
	import DATA from '$lib/data.js';
	import Header from '$lib/Header.svelte';
	import JoinUs from '$lib/JoinUs.svelte';
	import About from '$lib/About.svelte';
	import Carousel from '$lib/Carousel.svelte';
	import Video from '$lib/Video.svelte';
	import News from '$lib/News.svelte';
	import Footer from '$lib/Footer.svelte';
	import StaffPage from '$lib/StaffPage.svelte';
	import ParentVolunteers from '$lib/ParentVolunteers.svelte';
</script>

<Header links={DATA.NAV_DATA.LINKS} />
<About />
<JoinUs />
<Carousel images={DATA.IMAGE_DATA.IMAGES_LIST} />
<Video />
<ParentVolunteers />
<News articles={DATA.NEWS_STORIES} />
<StaffPage staff={DATA.STAFF_DATA} />
<Footer />

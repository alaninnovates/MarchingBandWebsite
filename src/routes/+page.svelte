<script>
	import { base } from '$app/paths';

	import DATA from '$lib/data.js';
	import Header from '$lib/Header.svelte';
	import JoinUs from '$lib/JoinUs.svelte';
	import About from '$lib/About.svelte';
	import Carousel from '$lib/Carousel.svelte';
	import News from '$lib/News.svelte';
	import Footer from '$lib/Footer.svelte';
	import StaffPage from '$lib/StaffPage.svelte';
	import ParentVolunteers from '$lib/ParentVolunteers.svelte';
	import UpcomingSeason from '$lib/UpcomingSeason.svelte';
	import FAQ from '$lib/FAQ.svelte';
	import EmbeddedSite from '$lib/EmbeddedSite.svelte';
	import Schedule from '$lib/Schedule.svelte';
</script>

<Header links={DATA.NAV_DATA.LINKS} />
<UpcomingSeason />
<JoinUs />
<!-- <EmbeddedSite
	src="https://docs.google.com/document/d/18Y2kF8CL9y-v4MYUrCNjVQOOqNp9eFm5XMh3J7e1I7E/edit?usp=sharing&rm=minimal"
/> -->
<Schedule />
<About />
<Carousel images={DATA.IMAGE_DATA} />
<ParentVolunteers />
<News articles={DATA.NEWS_STORIES} />
<StaffPage staff={DATA.STAFF_DATA} />
<FAQ questions={DATA.QUESTIONS_DATA} />
<Footer />

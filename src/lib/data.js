const IMAGE_DATA = {
	IMAGES_LIST: [
		{ src: '/images/car1.jpeg', alt: 'image 1' },
		{ src: '/images/car2.jpeg', alt: 'image 2' },
		{ src: '/images/car3.jpeg', alt: 'image 3' },
		{ src: '/images/car4.jpeg', alt: 'image 4' },
		{ src: '/images/car5.jpeg', alt: 'image 5' }
	]
};

const NAV_DATA = {
	LINKS: [
		{ label: 'Photos', href: '#photos' },
		// { label: 'Staff', href: '#staff' },
		{ label: 'News', href: '#news' },
		{ label: 'Join us!', href: '#join' }
		// { label: "Members", src: "/members" },
	]
};

const NEWS_STORIES = [
	{
		title: 'Los Altos Festival of Lights 2022: A night in pictures',
		website: 'Los Altos Town Crier',
		date: new Date('2022-11-29'),
		image_src:
			'https://bloximages.newyork1.vip.townnews.com/losaltosonline.com/content/tncms/assets/v3/editorial/6/4c/64c25e84-701e-11ed-bc20-e32a791d76ce/6386616003e4c.image.jpg?resize=375,500',
		image_alt: 'Color guard member performs routine at night.',
		href: 'https://www.losaltosonline.com/community/los-altos-festival-of-lights-2022-a-night-in-pictures/collection_c1ac216c-701d-11ed-8ec9-cfe7c3ec23aa.html'
	},
	{
		title: 'PHOTOS: Homecoming at Los Altos High',
		website: 'Midpeninsula Post',
		date: new Date('2022-10-30'),
		image_src:
			'https://i0.wp.com/midpenpost.org/wp-content/uploads/2022/10/6.jpg?fit=5043,3362&ssl=1',
		image_alt: 'Marching band marches downtown.',
		href: 'https://midpenpost.org/2022/10/30/photos-homecoming-at-los-altos-high-2/'
	},
	{
		title: 'LAHS parades downtown',
		website: 'Los Altos Town Crier',
		date: new Date('2021-11-02'),
		image_src:
			'https://bloximages.newyork1.vip.townnews.com/losaltosonline.com/content/tncms/assets/v3/editorial/7/ef/7ef21926-3c3e-11ec-ad9c-63459ffcfc52/6181da5a3770c.image.jpg?resize=667,500',
		image_alt: 'Color guard members swings flag.',
		href: 'https://www.losaltosonline.com/schools/lahs-parades-downtown/article_01c80cfe-3c3d-11ec-999f-7b5865001477.html'
	}
];

const STAFF_DATA = [
	{
		name: 'Mr. Ted Ferrucci',
		role: 'Director',
		blurb: '',
		email: 'ted.ferrucci@mvla.net',
		src: '/images/TedFerrucci.jpg'
	}
];

const DATA = {
	IMAGE_DATA,
	NAV_DATA,
	NEWS_STORIES,
	STAFF_DATA
};

export default DATA;

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
		{ label: 'Staff', href: '#staff' },
		{ label: 'News', href: '#news' },
		{ label: 'Sign Up', href: '#signup' }
		// { label: "Members", src: "/members" },
	]
};

const NEWS_STORIES = [
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

const DATA = {
	IMAGE_DATA,
	NAV_DATA,
	NEWS_STORIES
};

export default DATA;

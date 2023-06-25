const IMAGE_DATA = [
	{
		src: '/images/gallery/bandroom.jpg',
		alt: 'image 1',
		label: 'The band room!'
	},
	{
		src: '/images/gallery/football1.jpg',
		alt: 'image 2',
		label: 'Football Games!'
	},
	{
		src: '/images/gallery/football2.jpg',
		alt: 'image 2'
	},
	{
		src: '/images/gallery/football3.jpg',
		alt: 'image 2'
	},
	{
		src: '/images/gallery/comp.jpg',
		alt: 'image 3',
		label: 'Competitions!'
	},
	{
		src: '/images/gallery/parade.jpg',
		alt: 'image 4',
		label: 'Parades!'
	},
	{
		src: '/images/gallery/parade2.webp',
		alt: 'image 4'
	},
	{
		src: '/images/gallery/parade3.webp',
		alt: 'image 4'
	},
	{
		src: '/images/gallery/walden.jpeg',
		alt: 'image 5',
		label: 'Walden West!'
	}
];
const NAV_DATA = {
	LINKS: [
		{ label: 'Photos', href: '#photos' },
		{ label: 'Parents', href: '#parents' },
		{ label: 'News', href: '#news' },
		{ label: 'Staff', href: '#staff' },
		{ label: 'FAQ', href: '#faq' },
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

const QUESTIONS_DATA = [
	{
		question: 'Is being a member of the marching band & color guard difficult?',
		answer:
			'Just like anything worth your time, being in the LAHS Marching Band and Color Guard takes effort.  It is different from any other ensemble that you (or your student) will have participated in regardless of experience or level of musicianship. However, we have a spot for ALL students, regardless of your current musical level. Our biggest wish is for all students to achieve consistently and enjoy the learning process. Every aspect of our program is designed to foster and encourage musical and personal growth. Most members consider the marching band an extension of their families and find that this is where they feel most at home and connected.'
	},
	{
		question: 'Can I play sports and/or participate in other co-curricular activities?',
		answer:
			'YES! In fact, most of our students are involved in sports or other co- curricular activities. We encourage you to participate in a variety of co-curricular activities. No matter what activities you pursue, you must keep an accurate schedule and iron out any conflicts that may arise. We have a systematic approach to help you with this, but it is up to you to keep your schedule straight, for the good of the band and for the good of your other activities. With a little give and take, most things work out just fine. We have or have had students involved in every sport on campus. Additionally, any college or university in the country will attest to the fact that the busiest students are the most successful students. Again, structure and discipline work!'
	},
	{
		question: 'Do I need to be in marching band and concert band (or another ensemble)?',
		answer:
			'It is strongly encouraged that all members of the marching band are also enrolled in Concert Band or another year long instrumental music ensemble.  Since marching band is only a semester-long class that  ends in early December there would be a gap of 8-9 months between the end of one marching band season and the beginning of the next season.  As we have all experienced with COVID distance learning, not playing an instrument everyday or several days a week leads to regression in playing abilities, physical fitness, stamina, and social and emotional development. Many students who think that they only want to be in marching band or that they won’t have time to be in two band classes ask to join a year long class at the beginning of the second semester or a few weeks into the new school year.'
	},
	{
		question: 'Does marching band take up all of my time?',
		answer:
			'No! This is perhaps the greatest misconception to incoming students and parents. Band is a commitment, just like anything of worth, but does not prevent you from participation in other LAHS classes, activities, and co- curriculars. The first quarter of the year encompasses the greatest amount of time outside of school, which is considered the “homework” for the class since no other work exists other than this rehearsal and learning time. After this, time commitment is limited to class, home practice, and performances. Further, there are many studies that show that there is no group on any high school campus with a greater success rate in everything from GPA, college placement, and social and emotional well-being than instrumental music. (The list of benefits is far longer than the 3 examples that I just shared with you)  Structure and discipline work!'
	},
	{
		question: 'Does marching band look good on college applications?',
		answer:
			'ABSOLUTELY! BAND STUDENTS CLEARLY STAND OUT! In fact, most college admissions departments seek out music students, as they recognize all that is involved in our academic discipline. Our graduates are attending some of the top universities and colleges in the country. Every year, the music office phone rings with questions from college admissions departments regarding our students. Most of our students stand out when compared to non-music students, and every year we have graduates earning scholarships based on their music participation and academic merit. No other organization on campus at LAHS stands out in the way the Instrumental Music Program (bands, orchestras, choirs, and color guard) does.'
	},
	{
		question: 'Does the school provide instruments?',
		answer:
			'The school helps with larger, more expensive instruments. Tubas (marching and concert), Euphoniums (Baritones), baritone saxophones, bass clarinets, percussion, etc. are some.  If you have the need for using a smaller instrument due to your financial situation we do have a limited number of smaller instruments for use on a case by case basis.  We do encourage students to purchase a good quality instrument for concert performances. Often students will play these instruments for the rest of their lives in one capacity or another: community groups, churches, synagogues, etc.! It is worth owning a good quality instrument.  If you are planning on upgrading your student’s instrument I would be happy to steer you in the right direction.  I strongly recommend getting advice prior to buying an instrument.'
	},
	{
		question: 'Does the school provide marching band uniforms?',
		answer:
			'Yes, just about everything uniform related is provided for students. As part of the band fees, students will defray the cost of cleaning and upkeep of their individual uniform.'
	},
	{
		question: 'If I want to switch to a different instrument, what do you recommend?',
		answer:
			'French Horns, Low brass (Tuba, Trombone, Euphonium/Baritone), and Bassoon are typically our biggest area of need. Please discuss this with Mr. Ferrucci prior to making this decision for an embouchure test to make sure it will be a positive change. We highly recommend students who switch instruments to take private lessons or group lessons.'
	}
];

const DATA = {
	IMAGE_DATA,
	NAV_DATA,
	NEWS_STORIES,
	STAFF_DATA,
	QUESTIONS_DATA
};

export default DATA;

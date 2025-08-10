export const navLinks = [
	{
		id: "about",
		title: "About",
	},
	{
		id: "work",
		title: "Work",
	},
	// {
	// 	id: "projects",
	// 	title: "Projects",
	// },
	{
		id: "contact",
		title: "Contact",
	},
];

const services = [
	{
		title: "App Developer",
		icon: "/mobile.webp",
	},
	{
		title: "Full Stack Web Developer",
		icon: "/web.webp",
	},
	{
		title: "Software Engineer",
		icon: "/creator.webp",
	},
];

const technologies = [
	{
		name: "React Native",
		icon: "/tech/react-native.webp",
	},
	{
		name: "Expo",
		icon: "/tech/expo-logo.svg",
	},
	{
		name: "JavaScript",
		icon: "/tech/javascript.webp",
	},
	{
		name: "TypeScript",
		icon: "/tech/typescript.webp",
	},
	{
		name: "React JS",
		icon: "/tech/reactjs.webp",
	},
	{
		name: "Next.JS",
		icon: "/tech/nextjs.svg",
	},
	{
		name: "Redux Toolkit",
		icon: "/tech/redux.webp",
	},
	{
		name: "Tailwind CSS",
		icon: "/tech/tailwind.webp",
	},
	{
		name: "Three JS",
		icon: "/tech/threejs.webp",
	},
	{
		name: "git",
		icon: "/tech/git.webp",
	},
	{
		name: "Flutter",
		icon: "/tech/flutter.png",
	},
	{
		name: "Swift",
		icon: "/tech/swift.png",
	},
	{
		name: "Mapbox",
		icon: "/tech/mapbox.png",
	},
];

const experiences = [
	{
		title: "Software Developer",
		company_name: "ARIA Software",
		icon: "/company/aria.png",
		iconBg: "#383E56",
		date: "Jan 2023 -  Jul 2024",
		points: [
			"Developed hybrid mobile applications using React Native Expo.",
			"Built responsive React and Next.js frontends for SaaS dashboards and admin panels.",
			"Created 3D configurator & interactive animations using Three.js.",
			"Developed reusable components and managed state using Redux Toolkit.",
			"Integrated REST APIs and Firebase backend to ensure seamless user experience.",
			"Worked closely with UX designers to convert Figma designs into clean Tailwind-based UI."
		],
	},
	{
		title: "Mobile Developer",
		company_name: "Serviciales.com S.A.S.",
		icon: "/company/serviciales.jpg",
		iconBg: "#E6DEDD",
		date: "Jan 2020 - Nov 2021",
		points: [
			"Built and maintained cross-platform mobile apps using React Native and Flutter.",
			"Created onboarding flows, push notification systems, and in-app payment integrations.",
			"Deployed apps to Google Play and App Store with CI/CD pipelines.",
			"Collaborated with product managers and QA for sprint-based feature delivery.",
			"Reduced crash rates by optimizing app performance and using error tracking tools."
		],
	},
	{
		title: "React Native Developer",
		company_name: "MM Programación S.A.S.",
		icon: "/company/mm.jpg",
		iconBg: "#E6DEDD",
		date: "Feb 2018 - Dec 2019",
		points: [
			"Developed mobile applications for logistics and client service management.",
			"Implemented custom navigation, theming, and localization using React Native.",
			"Integrated Firebase for authentication and real-time data sync.",
			"Participated in UI/UX improvements and animated interactions.",
			"Assisted in migrating legacy apps to modern frameworks.",
		],
	},
];

const testimonials = [
	{
		id: 1,
		testimonial:
			"LinkedIn is a business and employment-focused social media platform that works through websites and mobile apps.",
		name: "Osmel Trillo",
		image: "/socialmedia/linkedin.svg",
		link: "https://www.linkedin.com/in/osmel-trillo/",
	},
	{
		id: 2,
		testimonial:
			"Also do check out my Github Profile where I have shared all my codes from basic to advanced.",
		name: "Osmel Trillo",
		image: "/tech/github.png",
		link: "https://github.com/o-dev1121",
	},
];


const projects :{
	name: string;
	description: string;
	tags: {
		name: string;
		color: string;
	}[];
	image: string;
	source_code_link?: string;
	android_link?: string;
	ios_link?: string;
	deploy_link?: string;
}[] = [
	{
		name: "Elite & Quality Date",
		description:
			"Exclusive dating app for successful and attractive singles, offering selective matching, verified profiles, and a premium, high-end dating experience.",
		tags: [
			{
				name: "React Native",
				color: "red-text-gradient",
			},
			{
				name: "Node.js",
				color: "orange-text-gradient",
			},
			{
				name: "tailwind",
				color: "blue-text-gradient",
			},
		],
		image: "/projectimg/luxy_pro.png",
		android_link: "https://play.google.com/store/apps/details?id=com.luxypro",
		ios_link: "https://apps.apple.com/us/app/luxy-pro-elite-quality-date/id1089481539?platform=iphone",
	},
	{
		name: "Autarq Solar Solutions",
		description:
			"German solar tech company offering sleek solar roof tile systems. Site features products, custom tools, case studies, and sustainability info.",
		tags: [
			{
				name: "Next.js",
				color: "blue-text-gradient",
			},
			{
				name: "TaliwindCSS",
				color: "green-text-gradient",
			},
			{
				name: "PWA",
				color: "pink-text-gradient",
			},
		],
		image: "/projectimg/autarq.png",
		deploy_link: "https://www.autarq.com/en-de/",
	},
	{
		name: "Munchies Web Platform",
		description:
			"A lively, content-rich food brand site built with motion, storytelling, and responsive design, featuring animations, product highlights, and Sanity CMS for easy content updates.",
		tags: [
			{
				name: "Next.js",
				color: "blue-text-gradient",
			},
			{
				name: "TaliwindCSS",
				color: "green-text-gradient",
			},
			{
				name: "Sanity CMS",
				color: "pink-text-gradient",
			},
		],
		image: "/projectimg/munchies.png",
		deploy_link: "https://munchies-tinloof.vercel.app/",
	},
	{
		name: "Personal Portfolio",
		description:
			"I built a fully interactive 3D portfolio with Next.js and Three.js, and implemented smooth animations using Framer Motion. I optimized 3D assets for performance and ensured responsiveness across all devices.",
		tags: [
			{
				name: "Next.js",
				color: "blue-text-gradient",
			},
			{
				name: "Three.js",
				color: "green-text-gradient",
			},
			{
				name: "TailwindCSS",
				color: "pink-text-gradient",
			},
		],
		image: "/projectimg/personal_portfolio.png",
		source_code_link: "https://github.com/o-dev1121/Portfolio-nextjs-threejs",
		deploy_link: "https://portfolio-nextjs-threejs.vercel.app/",
	},
	{
		name: "Take Walks Tours",
		description:
			"An engaging tour booking platform offering curated travel experiences worldwide, featuring rich visuals, intuitive navigation, and responsive design for seamless trip planning.",
		tags: [
			{
				name: "Vue.js",
				color: "blue-text-gradient",
			},
			{
				name: "Vuex",
				color: "green-text-gradient",
			},
			{
				name: "REST API",
				color: "pink-text-gradient",
			},
		],
		image: "/projectimg/takewalks.png",
		deploy_link: "https://www.takewalks.com/",
	},
	{
		name: "MWMC Health",
		description:
			"Comprehensive healthcare website for Medical Center, providing patient resources, service details, and hospital information with a modern, accessible design.",
		tags: [
			{
				name: "Vue.js",
				color: "blue-text-gradient",
			},
			{
				name: "Nuxt.js",
				color: "green-text-gradient",
			},
			{
				name: "TailwindCSS",
				color: "pink-text-gradient",
			},
			{
				name: "Axios",
				color: "yellow-text-gradient",
			},
		],
		image: "/projectimg/mwmc.png",
		deploy_link: "https://www.mwmc.com/",
	},
	{
		name: "A.V.M Auto Portfolio",
		description:
			"A Designed and developed a visually appealing and user-friendly portfolio website using WordPress.",
		tags: [
			{
				name: "wordpress",
				color: "blue-text-gradient",
			},
			{
				name: "google-translate",
				color: "green-text-gradient",
			},
		],
		image: "/projectimg/avm.webp",
		deploy_link: "https://avmauto.in/",
	},
	{
		name: "Screenshot & Bookmark Manager",
		description:
			"Chrome extension that lets users capture screenshots, save bookmarks, and organize them for quick access, boosting productivity and workflow.",
		tags: [
			{
				name: "React",
				color: "blue-text-gradient",
			},
			{
				name: "TypeScript",
				color: "green-text-gradient",
			},
			{
				name: "Chrome extension API",
				color: "orange-text-gradient",
			},
		],
		image: "/projectimg/lasso_extension.png",
		deploy_link: "https://chromewebstore.google.com/detail/screenshot-bookmark-manag/mpgmpojhkikacbjcdgibnhckgogphelc?pli=1",
	},
	// {
	// 	name: "Sparkbright Engineering Portfolio",
	// 	description:
	// 		" Designed and developed a visually appealing and user-friendly portfolio website using Next.JS.",
	// 	tags: [
	// 		{
	// 			name: "next",
	// 			color: "red-text-gradient",
	// 		},
	// 		{
	// 			name: "Next UI",
	// 			color: "orange-text-gradient",
	// 		},
	// 		{
	// 			name: "tailwind",
	// 			color: "blue-text-gradient",
	// 		},
	// 	],
	// 	image: "/projectimg/sparkbright.png",
	// 	source_code_link: "https://github.com/o-dev1121/React-Admin-DashBoard",
	// 	// deploy_link: "https://sparkbright.in/",
	// },
	{
		name: "HooBank",
		description:
			"A responsive Bank HomePage showcasing different features such as various payment gateways integration, easy money transfer, advanced security, etc. It has a beautiful interface made using Tailwind CSS and React",
		tags: [
			{
				name: "next",
				color: "green-text-gradient",
			},
			{
				name: "tailwind",
				color: "blue-text-gradient",
			},
		],
		image: "/projectimg/hoobank.webp",
		deploy_link: "https://hoooobank.netlify.app/",
	},
	{
		name: "MERN Dashboard",
		description:
			" Designed and developed a visually appealing and user-friendly Data Analytics Dashboard using MERN",
		tags: [
			{
				name: "react",
				color: "blue-text-gradient",
			},
			{
				name: "materialui",
				color: "orange-text-gradient",
			},
			{
				name: "MongoDB",
				color: "green-text-gradient",
			},
			{
				name: "Express",
				color: "pink-text-gradient",
			},
		],
		image: "/projectimg/mern.png",
		deploy_link: "https://admin-frontend-r705.onrender.com/",
	},
	{
		name: "Metaverse Web 3.0",
		description:
			"A Modern UI/UX Landing Page using Framer Motion and TailwindCSS with a feel and looks of Web 3.0",
		tags: [
			{
				name: "react",
				color: "blue-text-gradient",
			},
			{
				name: "tailwind",
				color: "green-text-gradient",
			},
			{
				name: "framer-motion",
				color: "orange-text-gradient",
			},
		],
		image: "/projectimg/metaverse.png",
		// source_code_link: "https://github.com/o-dev1121/Project_Metaverse",
		deploy_link: "https://project-metaverse-beta.vercel.app/",
	},
];

export { services, technologies, experiences, testimonials, projects };

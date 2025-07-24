const logo1 = new URL('../assets/company-1.jpg', import.meta.url).href;
const logo2 = new URL('../assets/company-2.jpg', import.meta.url).href;
const logo3 = new URL('../assets/company-3.jpg', import.meta.url).href;
const avatar2 = new URL('../assets/avatar-2.jpg', import.meta.url).href;
const avatar1 = new URL('../assets/avatar-1.jpg', import.meta.url).href;
const avatar3 = new URL('../assets/avatar-3.jpg', import.meta.url).href;

export const data = [
	{ 
		text: "Sales Fortuna made managing sales easier and helped us focus on customers. Its tools have been crucial for our growth and client satisfaction.",
		id: 1,
		logo: logo1,
		avatar: avatar1,
		author: 'Ethan Morgan',
		position: 'Founder and CEO, Serene Living Products'
	},
	{ 
		text: "Sales Fortuna has made sales so much easier for us. It saves time, simplifies the whole process, and helps us land more deals without extra hassle.",
		id: 2,
		logo: logo2,
		avatar: avatar2,
		author: 'Olivia Hayes',
		position: 'Owner, Starlight Creations'
	},
	{ 
		text: "Sales Fortuna has simplified our lead generation, helping us attract qualified prospects effortlessly and drive consistent growth.",
		id: 3,
		logo: logo3,
		avatar: avatar3,
		author: 'Alexander Reed',
		position: 'Co-Founder, Opulent Living Group'
	},
];
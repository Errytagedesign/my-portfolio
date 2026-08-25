import images from '../images';
import type { FeaturedProjectData, Project } from '@/types';

/**
 * `cover: true` marks a designed brand cover rather than a product
 * screenshot, so the showcase skips the grayscale/tint treatment.
 *
 * `featured: true` promotes a project into the large alternating showcase at
 * the top of the Work section. Everything else falls through to the
 * "Other Noteworthy Projects" card grid, in the order listed here.
 */
export const WorkData: Project[] = [
  {
    featured: true,
    name: 'Textworld',
    desc: 'A virtual phone number platform for SMS and OTP verification. I built the marketing website, the user web app and the admin dashboard, wiring real-time SMS retrieval over WebSocket to cut verification delays by 80% and integrating Stripe and Flutterwave for payments. Optimised SSR brought load speed down by 30%.',
    imgUrl: images.textworld,
    link: 'https://textworld.co/',
    stacks: [
      'React',
      'Next.js',
      'Tailwind CSS',
      'GSAP',
      'WebSocket',
      'Stripe',
      'Cloudflare',
    ],
    coy: 'Jupita',
  },
  {
    featured: true,
    name: 'PanelSuite',
    desc: 'An all-in-one platform for virtual numbers, eSIMs and social engagement tools. I built the waitlist, the marketing website, the web app, the React Native mobile app and the admin dashboard — covering number rentals, SMS tracking, eSIM activation and analytics, with GSAP-driven animation and crypto and KorraPay payments.',
    imgUrl: images.panelsuite,
    link: 'https://www.panelsuite.io/',
    stacks: [
      'React',
      'Next.js',
      'React Native (CLI)',
      'Context API',
      'WebSocket',
      'Stripe',
    ],
    coy: 'Amp10',
  },
  {
    featured: true,
    name: 'Geeft',
    desc: 'A social community platform that turns gifting into a shared experience — share moments, connect with friends and surprise loved ones. I built the waitlist, the marketing website, the vendor web app and the admin dashboard.',
    imgUrl: images.geeft,
    link: 'https://geeftapp.danielcolec.workers.dev/',
    stacks: ['Next.js', 'React', 'Tailwind CSS', 'Cloudflare Workers'],
    coy: 'Jupita',
  },
  {
    featured: true,
    name: 'NeoLyf',
    desc: 'A lifestyle crypto platform that turns Bitcoin into a passport for borderless living — send, spend, earn and borrow across Africa and beyond. I implemented multilingual support across three languages to widen reach, and built the GSAP-driven interface animations that carry the product story.',
    imgUrl: images.neolyf,
    link: 'https://neolyf-six.vercel.app/en',
    stacks: ['Next.js', 'GSAP', 'i18n', 'Bitcoin'],
    coy: 'Amp10',
  },
  {
    featured: true,
    name: 'Kanselo',
    desc: 'A digital mentorship and business advisory platform connecting entrepreneurs and professionals with verified mentors, so no one builds alone. I built the marketing website, the mentor web app, the mentee web app and the admin dashboard.',
    imgUrl: images.kanselo,
    link: 'https://kanselo.com/',
    stacks: ['Next.js', 'React', 'Tailwind CSS'],
    coy: 'Jupita',
  },
  {
    name: 'Qbicles Retail',
    desc: 'A point-of-sale system built for Nigerian retailers — track sales, manage inventory, reward loyalty and arrange delivery from one place. More an ecosystem than a till.',
    link: 'https://qbicles-retailer-website.vercel.app/',
    stacks: ['Next.js', 'React', 'Tailwind CSS'],
    coy: 'Amp10',
  },
  {
    name: 'Qbicles Trader',
    desc: 'A B2B trade tool that keeps buyers and sellers on the same page — orders, approvals and business relationships tracked through every transaction.',
    link: 'https://qbicles-trader-website.vercel.app/',
    stacks: ['Next.js', 'React', 'Tailwind CSS'],
    coy: 'Amp10',
  },
  {
    name: 'Qbicles Buddy',
    desc: 'A social commerce feed pairing shoppers with local sellers — discover food, beauty, fashion and retail, then order in one smooth flow.',
    link: 'https://qbicles-buddy-website.vercel.app/',
    stacks: ['Next.js', 'React', 'Tailwind CSS'],
    coy: 'Amp10',
  },
  {
    name: 'PAIRR',
    desc: 'A discreet social connection platform built privacy-first, matching like-minded people while keeping their identity and activity private.',
    link: 'https://pairr-website.vercel.app/',
    stacks: ['Next.js', 'React', 'Tailwind CSS'],
    coy: 'Jupita',
  },
  {
    name: 'Moniarch',
    desc: 'A business payments platform offering secure, scalable payment infrastructure tailored to the industries it serves.',
    link: 'https://moniarch.vercel.app/',
    stacks: ['Next.js', 'React', 'Tailwind CSS'],
    coy: 'Jupita',
  },
  {
    name: 'Cader',
    desc: 'A gift card exchange for trading cards for cash or for other cards in minutes, at the best available rates and without the usual delays.',
    link: 'https://carder-rust.vercel.app/',
    stacks: ['Next.js', 'React', 'Tailwind CSS'],
    coy: 'Jupita',
  },
  {
    name: 'Movies Database',
    desc: 'Explore the world of cinema with our innovative web app crafted using React. Immerse yourself in a curated collection of globally acclaimed movies, elegantly presented in a user-friendly interface. From Hollywood blockbusters to international gems, our app showcases the best in cinematic entertainment.',
    imgUrl: images.movies,
    link: 'https://errytage-rmdb.netlify.app',
    github: 'https://github.com/Errytagedesign/react-mdb',
    stacks: ['Reactjs', 'MovieDBApi', 'Styled-Components', 'Bootstrap'],
  },
  // {
  //   name: "Real Estate web-app",
  //   desc: "A real estate web app built with Next.js, with search functionality for rental properties, properties for sale, and search by location.",
  //   imgUrl: images.realestate,
  //   link: "https://realestate-web-app-errytagedesign.vercel.app/search",
  //   github: "https://github.com/Errytagedesign/realestate-web-app",
  //   stacks: ["Nextjs", "React", "Scss", "Bootstrap"],
  // },
  // {
  //   name: "Countries",
  //   desc: "Search for countries around the world to find out about their name, official name, capital city, the countries they share borders with, population, currency and more.",
  //   imgUrl: images.countries,
  //   link: "https://errytagecountries.netlify.app",
  //   github: "https://github.com/Errytagedesign/countries-web-app",
  //   stacks: ["React", "Rest-API", "Scss", "Bootstrap"],
  // },
  // {
  //   name: "WenFoods Web App",
  //   desc: "A web app developed to sell and promote healthy foods, like Basmati Rice.",
  //   imgUrl: images.goodnews,
  //   link: "https://wenfoods.vercel.app/",
  //   stacks: ["Reactjs", "NodeJs", "RapidApi", "Cloudinary", "Bootstrap"],
  // },
  {
    name: 'Destiny Travel and Tours',
    desc: 'A trusted global travel specialist with over 10 years of expertise in making travel dreams come true, for individuals seeking adventures and professionals exploring new opportunities.',
    imgUrl: images.goodnews,
    link: 'https://travelandtours.vercel.app/',
    stacks: ['Reactjs', 'NodeJs', 'RapidApi', 'Cloudinary', 'Bootstrap'],
    coy: 'Jupita',
  },
  {
    name: 'My Danicare',
    desc: 'Psychiatry transformed for everyone — eradicating stigma, ensuring dependable access to in-network care, and turning every visit into a real conversation, backed by top psychiatrists and cutting-edge research.',
    imgUrl: images.travels,
    link: 'https://www.mydanicare.com/',
    stacks: ['HTML', 'CSS', 'Javascript', 'Bootstrap'],
  },
  {
    name: 'Our Wedding Story',
    desc: 'Join us on a journey of love, laughter, and unforgettable moments as we celebrate the union of Aroun and Tiffany.',
    imgUrl: images.emagazine,
    link: 'https://twotogetherasone.com/',
    github: 'https://github.com/Errytagedesign/aroun-tiffany',
    stacks: ['HTML', 'CSS', 'Javascript', 'Bootstrap'],
  },
  {
    name: 'CommunityPro Meets',
    desc: 'A tech events project developed with the best combo of HTML, CSS and JavaScript. In addition, I added linters for HTML, CSS and JavaScript.',
    imgUrl: images.emagazine,
    link: 'https://communitypro-meets.netlify.app',
    github: 'https://github.com/Errytagedesign/communitypro',
    stacks: ['HTML', 'CSS', 'Javascript', 'Bootstrap'],
  },
  {
    name: 'Travel and Tour',
    desc: 'A simple travel and tours website, with locations and prices.',
    imgUrl: images.travels,
    link: 'https://errytagetravelandtour.netlify.app',
    github: 'https://github.com/Errytagedesign/TRAVEL-AND-TOUR-PROJECT',
    stacks: ['HTML', 'CSS', 'Javascript', 'Bootstrap'],
  },
  {
    name: 'Omove Landing page',
    desc: 'Just like you book a ride on Uber or Bolt, you can book a keke using the Omove app. This is a landing page to advertise the app.',
    imgUrl: images.omove,
    link: 'https://omove-web-app.vercel.app/',
    github: 'https://github.com/Errytagedesign/omove-web-app',
    stacks: ['React', 'Bootstrap'],
  },
];

export const FeaturedWork: FeaturedProjectData[] = WorkData.filter(
  (project): project is FeaturedProjectData =>
    Boolean(project.featured && project.imgUrl),
);
export const OtherWork: Project[] = WorkData.filter(
  (project) => !project.featured,
);

/**
 * Single source of truth for anything that has to know the public URL —
 * canonical links, Open Graph, sitemap, structured data.
 *
 * Change SITE_URL here (or set NEXT_PUBLIC_SITE_URL) when the custom domain
 * goes live; everything downstream follows.
 */
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ??
  'https://sodeeqawoyemi.errytage.workers.dev';

export const SITE = {
  name: 'Sodeeq Awoyemi',
  fullName: 'Sodeeq Olaide Awoyemi',
  jobTitle: 'Frontend Engineer',
  /** Kept under ~65 chars so Google does not truncate it. */
  title: 'Sodeeq Awoyemi — Frontend Engineer (React, Next.js, React Native)',
  /** Kept under ~160 chars for the same reason. */
  description:
    'Frontend engineer building web & mobile apps with React, Next.js, TypeScript and React Native. 20+ projects shipped. Open to roles, contracts and freelance work.',
  email: 'errytage@gmail.com',
  locality: 'Lagos',
  country: 'Nigeria',
  socials: {
    github: 'https://github.com/Errytagedesign',
    twitter: 'https://twitter.com/errytage',
    twitterHandle: '@errytage',
    whatsapp: 'https://wa.me/+2348095342136',
  },
} as const;

/**
 * Terms a recruiter or client would actually type. Search engines give the
 * keywords tag little to no weight these days — the real work is done by the
 * title, description, headings and structured data. It stays because job
 * boards and scrapers still read it.
 */
export const SITE_KEYWORDS = [
  'Sodeeq Awoyemi',
  'Sodeeq Olaide Awoyemi',
  'Errytage',
  'frontend engineer',
  'frontend developer',
  'web developer',
  'mobile app developer',
  'React developer',
  'React.js developer',
  'Next.js developer',
  'React Native developer',
  'TypeScript developer',
  'JavaScript developer',
  'Redux',
  'Zustand',
  'Tailwind CSS',
  'GSAP developer',
  'lead frontend engineer',
  'remote frontend developer',
  'frontend developer Nigeria',
  'frontend developer Lagos',
  'hire frontend developer',
  'freelance frontend developer',
  'contract frontend developer',
  'web app development',
  'cross-platform mobile apps',
  'portfolio',
];

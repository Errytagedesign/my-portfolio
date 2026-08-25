import type { IconType } from 'react-icons';
import {
  BsBraces,
  BsCloud,
  BsClipboardCheck,
  BsCodeSlash,
  BsPeople,
  BsTools,
} from 'react-icons/bs';

export type SkillGroup = {
  title: string;
  Icon: IconType;
  skills: string[];
};

/**
 * Grouped from the three lines of the resume's SKILLS section — Technical,
 * Tools & Methods, and Professional — split into categories that fit the
 * card grid. Nothing here is claimed that the resume does not list.
 */
export const SkillsData: SkillGroup[] = [
  {
    title: 'Languages',
    Icon: BsBraces,
    skills: ['JavaScript (ES6+)', 'HTML5', 'CSS3'],
  },
  {
    title: 'Frameworks & Libraries',
    Icon: BsCodeSlash,
    skills: [
      'React.js',
      'Next.js',
      'React Native',
      'Redux',
      'Zustand',
      'Tailwind CSS',
      'GSAP',
    ],
  },
  {
    title: 'Deployment & Cloud',
    Icon: BsCloud,
    skills: ['Vercel', 'Netlify', 'Cloudflare'],
  },
  {
    title: 'Tools',
    Icon: BsTools,
    skills: ['Git', 'GitHub', 'Chrome DevTools'],
  },
  {
    title: 'Testing & Methods',
    Icon: BsClipboardCheck,
    skills: ['RSpec', 'TDD'],
  },
  {
    title: 'Professional',
    Icon: BsPeople,
    skills: ['Teamwork', 'Mentoring', 'Remote Pair Programming'],
  },
];

import { FeaturedProjectsSectionType } from '@/lib/types/sections';
import { getId } from '@/lib/utils/helper';

const featuredProjectsSection: FeaturedProjectsSectionType = {
  title: "projects i've worked on",
  projects: [
    {
      id: getId(),
      name: 'BMI App',
      description: 'This is a web app for checking Body Mass Index.',
      url: 'https://bmi-app-eta.vercel.app/',
      img: '/bmi.png',
      tags: ['NextJs', 'Javascript', 'TailwindCSS'],
    },
    {
      id: getId(),
      name: 'Space tourism website',
      description: 'This is a fully responsive website for space tourism, where user get information about travel to space',
      url: 'https://space-site-drab.vercel.app/',
      img: '/spaceSite.png',
      tags: ['NextJs', 'Javascript', 'TailwindCSS',],
    },
  ],
};

export default featuredProjectsSection;

import React from 'react';

import campwithusImg from '@/../public/images/camp-with-us.png';
import carcatalogImg from '@/../public/images/car-catalog.png';
import filedriveImg from '@/../public/images/file-drive.png';
import projectmanagementImg from '@/../public/images/project-management.png';
import reactfoodImg from '@/../public/images/react-food.png';
import surgeImg from '@/../public/images/surge.png';
import portfolioImg from '@/../public/images/portfolio.png';
import auditMasterImg from '@/../public/images/audit-master.png';
import accountingImg from '@/../public/images/accounting.jpg';
import { BookIcon, BriefcaseBusinessIcon } from 'lucide-react';

export const links = [
  {
    name: 'Home',
    id: 'home',
  },
  {
    name: 'About',
    id: 'about',
  },
  {
    name: 'Projects',
    id: 'projects',
  },
  {
    name: 'Experience',
    id: 'experience',
  },
  {
    name: 'Skills',
    id: 'skills',
  },
  {
    name: 'Contact',
    id: 'contact',
  },
] as const;

export const experiencesData = [
  {
    title: 'Front-end Developer Intern',
    location: 'Coimbatore, TN',
    description:
      'Front-end Developer intern contributing to IT services, including server administration, cloud solutions, information systems, and software development. Focused on crafting efficient and scalable user interfaces.',
    icon: React.createElement(BriefcaseBusinessIcon),
    date: 'Dec 2024 - Present',
  },
  {
    title: 'Front-end Developer Intern',
    location: 'Nagercoil, TN',
    description:
      'Developed high-quality UI/UX, optimized frontend workflows, and contributed to application architecture and development, ensuring seamless user experiences.',
    icon: React.createElement(BriefcaseBusinessIcon),
    date: 'Aug 2024 - Dec 2024',
  },
  {
    title: 'Practical Projects',
    location: 'Self-Learning & Training',
    description:
      'Designed and implemented interactive, accessible, and user-friendly interfaces. Worked on various self-initiated projects, exploring AI integration and modern frontend technologies to enhance development skills.',
    icon: React.createElement(BriefcaseBusinessIcon),
    date: 'Jun 2020 - Never',
  },
  
] as const;

export const images = {
  campwithusImg,
  carcatalogImg,
  filedriveImg,
  projectmanagementImg,
  reactfoodImg,
};

export const projectsData = [
  {
    title: 'Movie App',
    description: `A movie browsing application built with React.js. It allows users to search for movies, view details, and explore trending films. The app integrates with an external movie database API for fetching real-time movie information.`,
    tags: ['React', 'JavaScript', 'React.js', 'Bootstrap', 'AXIOS'],
    imageUrl: auditMasterImg,
    link: 'https://ak-movieapp.netlify.app/',
  },
  {
    title: 'Blog Website',
    description:
      'A blog website template built using Next.js and Tailwind CSS. This project provides a responsive and minimalistic layout for publishing articles. It includes features like markdown support, SEO optimization, and fast page rendering.',
    tags: ['TypeScript', 'React', 'Next.js', 'Tailwind', 'Blog'],
    imageUrl: accountingImg,
    link: 'https://akblog-swart.vercel.app/',
  },
  {
    title: 'Flow Builder',
    description:
      'A flowchart builder application using React Flow and Next.js. It allows users to create, edit, and manage workflow diagrams visually. The app supports draggable nodes, dynamic connections, and customizable flow structures.',
    tags: [
      'React',
      'JavaScript',
      'Next.js',
      'React Flow',
      // 'Clerk',
      'Tailwind',
    ],
    imageUrl: filedriveImg,
    link: 'https://ak-react-flow.netlify.app/',
  },
  {
    title: 'Portfolio',
    description: `Portfolio that you're currently viewing! This project showcases my work and provides information about me. It highlights my skills, projects, and experiences.`,
    tags: [
      'React',
      'TypeScript',
      'Next.js',
      'Framer Motion',
      'Cloudinary',
      'React Email',
      'Tailwind',
    ],
    imageUrl: portfolioImg,
    link: 'https://ak-portfolio-gamma.vercel.app/',
  },

  {
    title: 'Customized Clerk App',
    description:
      'A customized authentication and user management app built with Next.js and Clerk. It provides a secure and seamless login/signup experience with role-based access control, user profiles, and authentication integrations.',
    tags: [
      'React',
      'JavaScript',
      'Next.js',
      'Clerk',
      'Tailwind',
      'Authendication'
    ],
    imageUrl: surgeImg,
    link: 'https://ak-portfolio-gamma.vercel.app/',
  },
] as const;

export const skillsData = [
  ['JavaScript', '/svgs/javascript-js.svg'],
  ['TypeScript', '/svgs/typescript-icon.svg'],
  ['React', '/svgs/react.svg'],
  ['Next.js', '/svgs/nextjs.svg'],
  ['Node.js', '/svgs/node-js.svg'],
  // ['Express', '/svgs/express-original.svg'],
  ['Tailwind', '/svgs/tailwind-css.svg'],
  ['Framer', '/svgs/framer.svg'],
  // ['Shadcn', '/svgs/shadcnui.svg'],
  // ['Headless', '/svgs/brand-headlessui.svg'],
  ['Redux', '/svgs/redux-original.svg'],
  ['Prisma', '/svgs/file-type-light-prisma.svg'],
  ['MongoDB', '/svgs/mongodb-original.svg'],
  ['Nest.js', '/svgs/nestjs-icon.svg'],
  ['React Flow', '/svgs/react-flow.svg'],
  // ['Tanstack Query', '/svgs/react-query-seeklogo.svg'],
  // ['Tanstack Table', '/svgs/db-table-svgrepo-com.svg'],
  // ['Cloudinary', '/svgs/cloudinary.svg'],
  // ['Golang', '/svgs/golang.svg'],
  // ['Docker', '/svgs/Docker.svg'],
  ['Clerk', '/svgs/clerk.svg'],
  ['Axios', '/svgs/axios.svg'],
  ['HTML', '/svgs/file-type-html.svg'],
  ['CSS', '/svgs/file-type-css.svg'],
  ['Sass', '/svgs/Sass.svg'],
  ['Git', '/svgs/git.svg'],
  ['GitHub', '/svgs/github.svg'],
  ['', '/svgs/etc.svg'],
] as const;

import {
  mobile,
  backend,
  creator,
  web,
  carrent,
  jobit,
  tripguide,
} from "../public/assets";
import  threejs  from "@/public/assets/tech/threejs.svg";
import docker from "@/public/assets/tech/docker.png";
import javascript from "@/public/assets/tech/javascript.png";
import figma from "@/public/assets/tech/figma.png";
import git from"@/public/assets/tech/git.png"; 
import css from"@/public/assets/tech/css.png"; 
import html from"@/public/assets/tech/html.png"; 
import mongodb from"@/public/assets/tech/mongodb.png"; 
import nodejs from"@/public/assets/tech/nodejs.png"; 
import reactjs from"@/public/assets/tech/reactjs.png"; 
import redux from"@/public/assets/tech/redux.png"; 
import tailwind from"@/public/assets/tech/tailwind.png"; 
import typescript from"@/public/assets/tech/typescript.png"; 
import zustand from"@/public/assets/tech/zustand.png"; 
import atom from"@/public/assets/tech/atom.png"; 
import wizzy from "@/public/assets/company/wizzy.png";
import daffy from "@/public/assets/company/daffy.jpg";
import miczy from "@/public/assets/company/miczy.jpg";
import tesla from "@/public/assets/company/tesla.png";
import gala9ja from "@/public/assets/company/gala9ja.jpg";

import ecommerce from "@/public/assets/projects/e-comm.png";
import ecommerce2 from "@/public/assets/projects/e-comm2.png";
import ecommerce3 from "@/public/assets/projects/e-comm3.png";
import ecommerce4 from "@/public/assets/projects/e-comm4.png";
import expencetrack from "@/public/assets/projects/expense-track2.png";
import expencetrack2 from "@/public/assets/projects/expense-track3.png";
import expencetrack3 from "@/public/assets/projects/expense-track4.png";
import expencetrack4 from "@/public/assets/projects/expense-track5.png";
import naija246 from "@/public/assets/projects/naija246.png";
import naija247 from "@/public/assets/projects/naija247.png";
import naija248 from "@/public/assets/projects/naija248.png";
import naija249 from "@/public/assets/projects/naija249.png";




export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

export const servicesRender = [
  {
    title: "Custom Web Developer",
    description: "Creating responsive front-end interfaces with React, EJS and building scalable back-end applications using Node.js, with frameworks Express.js.",
    icon: web,
  },
  {
    title: "React Native Developer",
    description: "Building mobile applications using React Native framework, ensuring optimal performance and user experience across different devices.",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    description: "Designing and implementing robust backend systems, APIs, and databases to support web and mobile applications.",
    icon: backend,
  },
  {
    title: "Support & Maintenance",
    description: "Providing ongoing support and maintenance for web and mobile applications, ensuring they remain up-to-date and secure.",
    icon: creator,
  },
  {    title: "3D Modeling",
    description: "Creating and integrating 3D models into web applications using Three.js to enhance user engagement and experience.",
    icon: threejs,
  },
  {    title: "DevOps",
    description: "Implementing DevOps practices to streamline development and deployment processes, ensuring efficient and reliable software delivery.",
    icon: docker,
  },
];

export const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
  {
    name: "Zustand",
    icon: zustand,
  },
  {
    name: "React Native",
    icon: atom,
  }
];

export const experiences = [
  {
    title: "React.js Developer",
    company_name: "Daffy Tech",
    icon: daffy,
    iconBg: "#383E56",
    date: "March 2022 - November 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "React Native Developer",
    company_name: "Miczy",
    icon: miczy,
    iconBg: "#E6DEDD",
    date: "Dec 2024 - Jun 2025",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Gala9ja",
    icon: gala9ja,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Wizzy Tech",
    icon: wizzy,
    iconBg: "#E6DEDD",
    date: "Jan 2025 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

export const projects = [
  {
    name: "Expense Tracker",
    description:
      "Web-based platform that allows users to post their expense and track how much they have spent in a particular month.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image1: expencetrack,
    image2: expencetrack2,
    image3: expencetrack3,
    image4: expencetrack4,
    source_code_link: "https://github.com/Osesoguogho/finance-tracker.git",
    web_link: "https://finance-tracker12.netlify.app/"
  },
  {
    name: "Naija247",
    description:
      "Web application that enables users to read, post and interact. It mainly build as a blog forum. user can share what is happening around them.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "ExpressJs",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind",
        color: "pink-text-gradient",
      },
    ],
    image1: naija246,
    image2: naija247,
    image3: naija248,
    image4: naija249,
    source_code_link: "https://github.com/Osesoguogho/blog-forum-code.git",
    web_link: "https://naija247-blog.netlify.app/"
  },
  {
    name: "pour Hommes",
    description:
      "A comprehensive e-commerce website that allow users to buy goods and ship to them. It is full stack build with NextJS and an Admin panel.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "Prisma",
        color: "green-text-gradient",
      },
      {
        name: "posgresql",
        color: "pink-text-gradient",
      },
    ],
     image1: ecommerce,
    image2: ecommerce2,
    image3: ecommerce3,
    image4: ecommerce4,
    source_code_link: "https://github.com/Osesoguogho/e-commerce.git",
    web_link: "https://e-commerce-mody.vercel.app/"
  },
];

export { testimonials};
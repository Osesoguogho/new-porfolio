import { cn } from "@/lib/utils";
import React from "react";
import { BentoGrid, BentoGridItem } from "../ui/bento-grid";
import coding from "@/assets/images/coding.jpg";
import figmaicon from "@/assets/images/figmaicon.jpg";
import stethoscope from "@/assets/images/stethoscope.jpg";
import learning from "@/assets/images/learning.jpg";
import Image from 'next/image';
import { SectionWrapper } from "@/hoc";

import {
  IconCpu,
  IconPalette,
  IconStethoscope,
  IconBooks,
} from "@tabler/icons-react";
 
function About({sectionRef}) {
  return (
    <>
    <h2 ref={sectionRef} className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] text-center">ABOUT ME</h2>
    <BentoGrid className="max-w-4xl mx-auto md:auto-rows-[20rem] mt-20 ">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          className={item.className}
          icon={item.icon}
        />
      ))}
    </BentoGrid>
    </>
  );
}
const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl   dark:bg-dot-white/[0.2] bg-dot-black/[0.2] [mask-image:radial-gradient(ellipse_at_center,white,transparent)]  border border-transparent dark:border-white/[0.2] bg-neutral-100 dark:bg-black"></div>
);
const Image1 = ()=> (
  <Image src={coding} height={200} width={200} alt="A developer writing code" className="
  flex flex-1 w-full h-full min-h-[6rem] rounded-xl backdrop-brightness-50"/>
)
const FigmaIcon = ()=> (
  <Image src={figmaicon} height={200} width={200} alt="A developer writing code" className="
  flex flex-1 w-full h-full min-h-[6rem] rounded-xl"/>
)
const Stethoscope = ()=> (
  <Image src={stethoscope} height={200} width={200} alt="A developer writing code" className="
  flex flex-1 w-full h-full min-h-[6rem] rounded-xl"/>
)
const Learning = ()=> (
  <Image src={learning} height={200} width={200} alt="A developer writing code" className="
  flex flex-1 w-full h-full min-h-[6rem] rounded-xl brightness-80"/>
)

const items = [
  {
    title: "Full Stack Engineering",
    description:
      "Building modern, scalable web and mobile apps using React, Node.js, Express, MongoDB, and PostgreSQL — bringing ideas to life through code.",
    header: <Image1 />,
    className: "md:col-span-2",
    icon: <IconCpu className="h-5 w-5 text-neutral-500" />,
  },
  {
    title: "UI/UX Design",
    description:
      "Crafting visually appealing and user-centered interfaces with Figma, Tailwind CSS, and React. Every design starts with empathy.",
    header: <FigmaIcon />,
    className: "md:col-span-1",
    icon: <IconPalette className="h-5 w-5 text-neutral-500" />,
  },
  {
    title: "Medical Insight",
    description:
      "Merging medical expertise with technology to create impactful digital health experiences that improve human lives.",
    header: <Stethoscope />,
    className: "md:col-span-1",
    icon: <IconStethoscope className="h-5 w-5 text-neutral-500" />,
  },
  {
    title: "Continuous Learning",
    description:
      "Driven by curiosity — exploring new technologies, frameworks, and design trends to stay ahead in a fast-changing tech world.",
    header: <Learning />,
    className: "md:col-span-2",
    icon: <IconBooks className="h-5 w-5 text-neutral-500" />,
  },
];

const AboutSec = SectionWrapper(About, "about");
export {AboutSec}

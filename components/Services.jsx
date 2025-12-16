"use client";

import React from "react";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { SectionWrapper } from "@/hoc";
import { servicesRender } from "@/constants";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { staggerContainer } from "../utils/motion";

export function Services() {
     const stagger = 0.3;
    const delay = 0.1;
    // sm:px-16 px-6 sm:py-16 py-10 max-w-7xl mx-auto relative z-0
  return (
    <motion.div
    id="services"
      initial={{ opacity: 0, y:100 }}
    whileInView={{opacity: 1, y:0}}
    transition={{ duration: 0.5, ease:"easeInOut" }}
      className="h-[40rem] rounded-md flex flex-col antialiased bg-black dark:bg-[#1d1836] dark:bg-grid-black/[0.05] items-center justify-center relative overflow-x-hidden w-full mb-20 mx-auto px-10 md:px-16 py-10">
        <h2 className={`text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] text-center mb-6`}>
          Services I Render.
        </h2>
      <InfiniteMovingCards items={servicesRender} direction="right" speed="slow" />
    </motion.div>
  );
}
// export const Services = SectionWrapper(
//   InfiniteMovingCardsDemo,
//   "services-infinite-cards"
// );

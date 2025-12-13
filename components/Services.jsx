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
      variants={staggerContainer(stagger, delay)}
              initial='hidden'
              whileInView='show'
              viewport={{ once: true, amount: 0.25 }}
      className="h-[40rem] rounded-md flex flex-col antialiased bg-[#1d1836] dark:bg-[#1d1836] dark:bg-grid-black/[0.05] items-center justify-center relative overflow-hidden w-full max-w-7xl mb-20 mx-32">
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

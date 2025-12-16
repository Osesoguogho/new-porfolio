"use client";
import React from "react";

import BallCanvas from "./canvas/Ball";
import { SectionWrapper } from "../hoc";
import { technologies } from "@/constants";
import { motion } from "framer-motion";

export const Skills = () => {
  // console.log("technologies: ", technologies);
  return (
    <motion.div
      initial={{ opacity: 0, y:100 }}
      whileInView={{opacity: 1, y:0}}
      transition={{ duration: 0.5, ease:"easeInOut", delay: 0.2 }}
      className="w-full mx-auto px-10 md:px-16 py-10 mb-20"
      id="skills" >
    <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] text-center">My Tech Skills</h2>
    <motion.div initial="hidden" whileInView="visible" variants={{hidden:{opacity:0, y:40}, visible:{opacity:1, y:0}}} transition={{duration:1, ease:"easeInOut", staggerChildren: 1, delayChildren: 0.5}}  className='flex flex-row flex-wrap justify-center gap-10 mt-20'>
      {technologies.map((technology) => (
        <div className='w-28 h-28' key={technology.name}>
          <BallCanvas icon={technology.icon} />
          <h3 className="text-white text-sm text-center">{technology.name}</h3>
        </div>
      ))}
    </motion.div>
    </motion.div>
  );
};

// const Skills = SectionWrapper(Tech, "");
// export {Skills}
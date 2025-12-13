import React from "react";

import BallCanvas from "./canvas/Ball";
import { SectionWrapper } from "../hoc";
import { technologies } from "@/constants";

const Tech = () => {
  // console.log("technologies: ", technologies);
  return (
    <>
    <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] text-center">My Tech Skills</h2>
    <div id="skills" className='flex flex-row flex-wrap justify-center gap-10 mt-20'>
      {technologies.map((technology) => (
        <div className='w-28 h-28' key={technology.name}>
          <BallCanvas icon={technology.icon} />
          <h3 className="text-white text-sm text-center">{technology.name}</h3>
        </div>
      ))}
    </div>
    </>
  );
};

const Skills = SectionWrapper(Tech, "");
export {Skills}
"use client";
import { useRef } from "react";
import HeroSec from "@/components/herosec";
import {Navbar} from "@/components/Navbar";
import { ThreeDMarqueeDemoSecond } from "@/components/Hero";
import {AboutSec} from "@/components/about-section/About";
import { Skills } from "@/components/Skills";
import {Experiences} from "@/components/Experience";
import { Projects } from "@/components/Projects";
import { Services } from "@/components/Services";
import { Contact } from "@/components/Contact";
import StarsCanvas from "@/components/canvas/Star";
import Footer from "@/components/Footer";




export default function Home() {

  return (
    <div className=" bg-black flex flex-col justify-center items-center">
     <Navbar />
        {/* <HeroSec /> */}
      
         <ThreeDMarqueeDemoSecond />
        
        <AboutSec />
        <Skills />
        <Experiences />
        <Projects />
        <Services />
        <Contact />
        <Footer />
        <div className="absolute inset-0 z-0">
        <StarsCanvas />
        </div>
        
    </div>
  );
}

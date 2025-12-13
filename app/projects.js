"use client";
import { useRef } from "react";
import HeroSec from "@/components/herosec";
import {Navbar} from "@/components/Navbar";



export default function Home() {

  return (
    <div className="h-screen bg-gray-900 flex flex-col justify-center items-center">
     <Navbar />
        <HeroSec />
    </div>
  );
}

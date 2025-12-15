"use client";
import { useRef } from "react";
import { ThreeDMarquee } from "@/components/ui/3d-marquee";
import HeroCanvass from "./canvas/HeroCanvass";

export default function Hero() {
  
  const images = [
    "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=872&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dGVjaG5vbG9neXxlbnwwfHwwfHx8MA%3D%3D",
    "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dGVjaG5vbG9neXxlbnwwfHwwfHx8MA%3D%3D",
    "https://images.unsplash.com/photo-1568952433726-3896e3881c65?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8dGVjaG5vbG9neXxlbnwwfHwwfHx8MA%3D%3D",
    "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRlY2hub2xvZ3l8ZW58MHx8MHx8fDA%3D",
    "https://images.unsplash.com/photo-1644088379091-d574269d422f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHRlY2hub2xvZ3l8ZW58MHx8MHx8fDA%3D",
    "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHRlY2hub2xvZ3l8ZW58MHx8MHx8fDA%3D",
    "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHRlY2hub2xvZ3l8ZW58MHx8MHx8fDA%3D",
    "https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fHRlY2hub2xvZ3l8ZW58MHx8MHx8fDA%3D",
    "https://images.unsplash.com/photo-1556742521-9713bf272865?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxzZWFyY2h8MjJ8fHRlY2hub2xvZ3l8ZW58MHx8MHx8fDA%3D",
    "https://images.unsplash.com/photo-1562408590-e32931084e23?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fHRlY2hub2xvZ3l8ZW58MHx8MHx8fDA%3D",
    "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fHRlY2hub2xvZ3l8ZW58MHx8MHx8fDA%3D",
    "https://images.unsplash.com/photo-1556742517-fde6c2abbe11?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxzZWFyY2h8Mjl8fHRlY2hub2xvZ3l8ZW58MHx8MHx8fDA%3D",
    "https://images.unsplash.com/photo-1576400883215-7083980b6193?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fHRlY2hub2xvZ3l8ZW58MHx8MHx8fDA%3D",
    "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fHRlY2hub2xvZ3l8ZW58MHx8MHx8fDA%3D",
    "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDJ8fHRlY2hub2xvZ3l8ZW58MHx8MHx8fDA%3D",
    "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDZ8fHRlY2hub2xvZ3l8ZW58MHx8MHx8fDA%3D",
    "https://images.unsplash.com/photo-1488229297570-58520851e868?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzh8fHRlY2hub2xvZ3l8ZW58MHx8MHx8fDA%3D",
    "https://images.unsplash.com/photo-1496171367470-9ed9a91ea931?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDl8fHRlY2hub2xvZ3l8ZW58MHx8MHx8fDA%3D",
    "https://images.unsplash.com/photo-1535223289827-42f1e9919769?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTB8fHRlY2hub2xvZ3l8ZW58MHx8MHx8fDA%3D",
    "https://images.unsplash.com/photo-1592659762303-90081d34b277?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTF8fHRlY2hub2xvZ3l8ZW58MHx8MHx8fDA%3D",
    "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTd8fHRlY2hub2xvZ3l8ZW58MHx8MHx8fDA%3D",
    "https://images.unsplash.com/photo-1504384764586-bb4cdc1707b0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTZ8fHRlY2hub2xvZ3l8ZW58MHx8MHx8fDA%3D",
    "https://images.unsplash.com/photo-1548092372-0d1bd40894a3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjJ8fHRlY2hub2xvZ3l8ZW58MHx8MHx8fDA%3D",
    "https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjR8fHRlY2hub2xvZ3l8ZW58MHx8MHx8fDA%3D",
    "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Njh8fHRlY2hub2xvZ3l8ZW58MHx8MHx8fDA%3D",
    "https://images.unsplash.com/photo-1536412597336-ade7b523ecfc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzN8fHRlY2hub2xvZ3l8ZW58MHx8MHx8fDA%3D",
    "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nzd8fHRlY2hub2xvZ3l8ZW58MHx8MHx8fDA%3D",
    "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODJ8fHRlY2hub2xvZ3l8ZW58MHx8MHx8fDA%3D",
    "https://images.unsplash.com/photo-1503437313881-503a91226402?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODZ8fHRlY2hub2xvZ3l8ZW58MHx8MHx8fDA%3D",
    "https://images.unsplash.com/photo-1484417894907-623942c8ee29?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODl8fHRlY2hub2xvZ3l8ZW58MHx8MHx8fDA%3D",
  ];
  return (
    <div  className="relative mx-auto mb-5 flex min-h-screen w-full max-w-7xl flex-col items-center justify-center overflow-clip px-6 py-16 text-center">
      <div className="relative z-20 grid gap-4 grid-cols-1 md:grid-cols-2 w-full h-full px-6 py-16 md:py-32 lg:px-8 lg:py-40">
        <div >
      <h2 className="relative z-20 mx-auto max-w-4xl text-center text-2xl font-bold text-balance text-white md:text-3xl lg:text-4xl">
        Hello I&apos;m {" "}
        <span className="relative z-20 inline-block rounded-xl bg-blue-500/40 px-4 py-1 text-white  decoration-sky-500 decoration-[6px] underline-offset-[16px] backdrop-blur-sm">
          Dr OGUOGHO OSEBHOHIEN
        </span>{" "}
        A Full Stack developer
      </h2>
      <p className="relative z-20 mx-auto max-w-2xl py-8 text-center text-sm text-neutral-200 md:text-base">
        With a passion of developing react web app, android and ios app and Node.js. I'm always ready to learn new concept, working and bonding with a team
      </p>

      <div className="relative z-20 flex flex-wrap items-center justify-center gap-4 pt-4">
        <button  onClick={() =>
    window.open("/assets/resume/oses-resume.pdf", "_blank")
  } className="rounded-md bg-sky-600 px-6 py-2.5 text-sm font-medium text-white transition-colors hover:bg-sky-700 focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 focus:ring-offset-black focus:outline-none">
          
          Download CV
          
        </button>
        <button  className="rounded-md border border-white/20 bg-white/10 px-6 py-2.5 text-sm font-medium text-white backdrop-blur-sm transition-colors hover:bg-white/20 focus:ring-2 focus:ring-white/20 focus:ring-offset-2 focus:ring-offset-black focus:outline-none">
        <a href="#about">About me</a>
        </button>
      </div>
      </div>
      {/* 3d model */}
      <div>
       
      <HeroCanvass />
      </div>
      </div>

      {/* overlay */}
      <div className="absolute inset-0 z-10 h-full w-full bg-black/80 dark:bg-black/40" />
      <ThreeDMarquee
        className="pointer-events-none absolute inset-0 h-full w-full"
        images={images}
      />
    </div>
  );
}

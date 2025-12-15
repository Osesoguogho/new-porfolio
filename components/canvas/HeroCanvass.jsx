"use client";
// import { Canvas } from "@react-three/fiber";
import {CanvasContext} from "./CanvasContext";
import { OrbitControls, Preload } from "@react-three/drei";
import { Model } from "../meshes/HeroMesh";
// import { Leva, useControls } from 'leva';
import { useEffect, useRef, Suspense, useState } from "react";
import CanvasLoader from "../Loader"


const HeroCanvass = () => {
  const [isMobile, setIsMobile] = useState(false);
  
    // Detect screen size
    useEffect(() => {
      const mediaQuery = window.matchMedia("(max-width: 640px)");
      setIsMobile(mediaQuery.matches);
  
      const handleChange = (e) => setIsMobile(e.matches);
      mediaQuery.addEventListener("change", handleChange);
  
      return () => mediaQuery.removeEventListener("change", handleChange);
    }, []);
  // const ref = useRef();
//   useEffect(()=> {
//     if (!ref.current) return;
//     setTimeout(() => {
//       ref.current.setAzimuthalAngle(Math.PI/2)
//  ref.current.setPolarAngle(Math.PI/2)
//  ref.current.update()
//     }, 100);
 
//   }, [])

  return (
    <div style={{ width: "100%", height: "350px" }}>
    <CanvasContext
      style={{ width: "100%", height: "100%" }}
      frameloop="always"
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
      camera={{ position: [0, 0, 5], fov: 45 }}
    >
       <Suspense fallback={<CanvasLoader />}>
        <directionalLight intensity={0.5} />
        <ambientLight intensity={0.2} />
        <pointLight
          position={isMobile ? [0, 0, 0] : [2, 2, 2]}
          intensity={1}
        />
        <spotLight
  position={[3, 5, 3]}
  angle={0.3}
  penumbra={0.5}
  intensity={1.2}
  castShadow
/>
        <OrbitControls enablePan={false} enableZoom={false} />
      {/* Add your 3D components and lights here */}
      <group position={[0, -10, 0]} >
        <Model position={[0, 0, 0]}  scale={[0.1, 0.1, 0.1]} />
        </group>
        </Suspense>
        <Preload all />
    </CanvasContext>
    </div>
  )
}

export default HeroCanvass
"use client";
import React, { Suspense, useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
// import {CanvasContext} from "./CanvasContext";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader";
import { Model } from "./GlobeModel";

// const Earth = () => {
//   const earth = useGLTF("./planet/scene.gltf");

//   return (
//     <primitive object={earth.scene} scale={2.5} position-y={0} rotation-y={0} />
//   );
// };


const EarthCanvas = () => {
     const [isMobile, setIsMobile] = useState(false);

  // Detect screen size
  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 640px)");
    setIsMobile(mediaQuery.matches);

    const handleChange = (e) => setIsMobile(e.matches);
    mediaQuery.addEventListener("change", handleChange);

    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);
  return (
    <Canvas
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: isMobile ? [-3, 2, 4.5] : [-4, 3, 6],
      }}
       style={{
        width: "100%",
        height: "100%",
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
      <directionalLight intensity={3} position={[5, 5, 5]} />
<directionalLight intensity={5} position={[-5, 5, 5]} />
<directionalLight intensity={2.5} position={[0, -3, 5]} />
        <ambientLight intensity={10} color="#ffffff"/>
         <pointLight
          position={[2, 2, 2]} intensity={5} color="#ffffff"
        />
        <hemisphereLight 
    intensity={1.2} 
    skyColor="#ffffff" 
    groundColor="#bbbbbb" 
  />
        <OrbitControls
          autoRotate
          autoRotateSpeed={3}
          enableZoom={false}
          enablePan={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Model scale={isMobile ? 0.7 : 1}/>

        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default EarthCanvas;


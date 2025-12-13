import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload } from "@react-three/drei";
import { Model } from "../meshes/HeroMesh";
import { Leva, useControls } from 'leva';
import { useEffect, useRef, Suspense } from "react";
import CanvasLoader from "../Loader"


const HeroCanvass = () => {
  const ref = useRef(null)
  useEffect(()=> {
    if (!ref.current) return;
 ref.current.setAzimuthalAngle(Math.PI/2)
 ref.current.setPolarAngle(Math.PI/2)
 ref.current.update()
  }, [])

  return (
    <>
    <Leva />
    <Canvas >
       <Suspense fallback={<CanvasLoader />}>
        <directionalLight intensity={0.5} />
        <ambientLight intensity={0.2} />
        <pointLight
          position={[2, 2, 2]}
          intensity={1}
        />
        <spotLight
  position={[3, 5, 3]}
  angle={0.3}
  penumbra={0.5}
  intensity={1.2}
  castShadow
/>
        <OrbitControls enablePan={false} ref={ref}/>
      {/* Add your 3D components and lights here */}
      <group position={[0, -10, 0]} >
        <Model position={[0, 0, 0]}  scale={[0.1, 0.1, 0.1]} />
        </group>
        </Suspense>
        <Preload all />
    </Canvas>
    </>
  )
}

export default HeroCanvass
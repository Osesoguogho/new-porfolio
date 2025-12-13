import React, { useRef, useState, useMemo, Suspense, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Preload, OrbitControls, Sphere, useTexture } from "@react-three/drei";
// import * as random from 'maath/random/dist/maath-random.cjs';
import { random } from "maath";


// --- Stars component (interactive + performant) ---
function Stars({ count = 4000, color = "#f272c8", speed = 1, mouseParallax = 0.2, ...props }) {
const ref = useRef();
const mouse = useRef([0, 0]);


// generate once
const positions = useMemo(() => random.inSphere(new Float32Array(count * 3), { radius: 6 }), [count]);


// simple mouse parallax
useEffect(() => {
function onMove(e) {
const x = (e.clientX / window.innerWidth) * 2 - 1;
const y = -(e.clientY / window.innerHeight) * 2 + 1;
mouse.current = [x, y];
}
window.addEventListener("pointermove", onMove);
return () => window.removeEventListener("pointermove", onMove);
}, []);


useFrame((state, delta) => {
if (!ref.current) return;
// rotate slowly and add tiny parallax based on mouse
ref.current.rotation.x += delta * 0.02 * speed + mouse.current[1] * mouseParallax * 0.01;
ref.current.rotation.y += delta * 0.015 * speed + mouse.current[0] * mouseParallax * 0.02;
});


return (
<group {...props} ref={ref}>
<Points positions={positions} stride={3} frustumCulled>
<PointMaterial transparent color={color} size={0.01} sizeAttenuation depthWrite={false} />
</Points>
</group>
);
};

const StarsCanvas = () => {
  return (
    <div className='w-full h-auto absolute inset-0 z-[-1]'>
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Suspense fallback={null}>
          <Stars />
        </Suspense>

        <Preload all />
      </Canvas>
    </div>
  );
};

export default StarsCanvas;


// function Stars(props) {
//     const ref = useRef();
//     const [sphere] = useState(() => random.inSphere(new Float32Array(5000), { radius: 1.5 }));
//     useFrame((state, delta) => {
//       ref.current.rotation.x -= delta / 10;
//       ref.current.rotation.y -= delta / 15;
//     });
//     return (
//         <group rotation={[0,0, Math.PI/4]}>
//       <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
//         <PointMaterial
//             transparent
//             color="#f272c8"
//             size={0.002}
//             sizeAttenuation={true}
//             depthWrite={false}
//         />
//       </Points>
//       </group>
//     );
//   }




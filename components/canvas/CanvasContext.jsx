"use client";

import { Canvas, useThree } from "@react-three/fiber";
import { useEffect, useRef, useState } from "react";



function Cleanup() {
  const { gl } = useThree();

  useEffect(() => {
    return () => {
      gl.forceContextLoss();
      gl.dispose();
    };
  }, [gl]);

  return null;
}

/* ✅ Chrome-safe Canvas wrapper */
export function CanvasContext({
  children,
  threshold = 0.5,
  ...props
}) {
  const containerRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold }
    );

    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, [threshold]);

  return (
    <div
      ref={containerRef}
      style={{ height:"100%", width: "100%", position: "relative" }}
    >
      {visible && (
        <Canvas
          {...props}
        >
          <Cleanup />
          {children}
        </Canvas>
      )}
    </div>
  );
}

// export function CanvasContext({ children, ...props }) {
//   return (
//     <Canvas
//       {...props}
//     >
//       {children}
//     </Canvas>
//   );
// }
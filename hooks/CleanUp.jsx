import { useThree } from "@react-three/fiber";
import { useEffect } from "react";

export function Cleanup() {
  const { gl } = useThree();

  useEffect(() => {
    return () => {
      gl.forceContextLoss();
      gl.dispose();
    };
  }, [gl]);

  return null;
}
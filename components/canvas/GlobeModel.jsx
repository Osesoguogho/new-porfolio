import React, {useRef, useEffect} from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export function Model(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/glbFile/globe3d.glb')
  const { actions } = useAnimations(animations, group)
  useEffect(() => {
    Object.values(materials).forEach((mat) => {
      if (!mat) return;

      mat.roughness = 0.2;
      mat.metalness = 0;
      mat.emissiveIntensity = 1.2;
      mat.emissive = mat.color.clone().multiplyScalar(0.3);
      mat.envMapIntensity = 2.5;
    });
  }, [materials]);
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[Math.PI / 2, 0.059, -Math.PI]} scale={0.022}>
          <group name="globe_uiFBX" rotation={[-Math.PI, 0, 0]}>
            <group name="Object_2">
              <group name="RootNode">
                <group name="graph" rotation={[Math.PI / 2, 0, 0]}>
                  <mesh name="graph_graph_0" geometry={nodes.graph_graph_0.geometry} material={materials.graph} />
                </group>
                <group name="DOTS">
                  <mesh name="DOTS_dots_0" geometry={nodes.DOTS_dots_0.geometry} material={materials.dots} />
                </group>
                <group name="graph_02" rotation={[Math.PI / 2, -Math.PI / 3, 0.96]}>
                  <mesh name="graph_02_graph_0" geometry={nodes.graph_02_graph_0.geometry} material={materials.graph} />
                </group>
                <group name="Dummy001" rotation={[Math.PI / 2, 0, 0.41]}>
                  <group name="globe_ambient" rotation={[-Math.PI / 2, 0, 0]}>
                    <mesh name="globe_ambient_globe_ambient_0" geometry={nodes.globe_ambient_globe_ambient_0.geometry} material={materials.globe_ambient} />
                  </group>
                  <group name="main_globe" rotation={[-Math.PI / 2, 0, 0]}>
                    <mesh name="main_globe_main_0" geometry={nodes.main_globe_main_0.geometry} material={materials.main} />
                  </group>
                  <group name="clouds" rotation={[-Math.PI / 2, -0.428, 0]}>
                    <mesh name="clouds_clouds_0" geometry={nodes.clouds_clouds_0.geometry} material={materials.clouds} />
                  </group>
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/glbFile/globe3d.glb')

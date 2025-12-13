import React, {Suspense, useRef} from 'react';
import Button from '../components/Button';
import {Canvas, useFrame} from '@react-three/fiber';
// import CanvasLoader from '../components/CanvasLoader';
// import { Model } from '../components/Model';
// import { AmbientLight, BoxGeometry, DirectionalLight, Mesh, MeshLambertMaterial } from 'three';
import { OrbitControls, PresentationControls, Stage } from '@react-three/drei';

const HeroSec = () => {
    const handleClick = () => {}
  return (
    <section className='hero flex flex-col lg:flex-row justify-center items-center text-white text-md'>
        <div className='flex flex-col sm:flex-row my-16 justify-center items-center h-full w-[80vw]'>
            <div>
                <h3 className='text-purple-700 text-2xl font-bold py-3'>Hi!</h3>
                <h1 className='text-4xl sm:text-5xl font-semibold py-3'>I AM OSES</h1>
                <p className='py-3'>A Web developer with extensive knowlege in developing full stack web application</p>
                <Button  design={"bg-purple-700 p-1.5 rounded-2xl cursor-pointer"} text={"View Work"}
                 handleClick={handleClick}/>
                <Button  design={"bg-purple-700 p-1.5 rounded-2xl cursor-pointer ml-5"} text={"Hire Me"}
                 handleClick={handleClick}/>
            </div>
            <div>
              
            <Canvas>
              <ambientLight args={[2,2,5]} intensity={1} color="#fffff"/>
              <directionalLight args={[0,0,10]} intensity={1} color="#fffff"/>
              {/* <OrbitControls />  */}
                  {/* <Model /> */}
                <MeshModel />
            </Canvas>
        </div>
        </div>
    </section>
  )
}

const MeshModel = () => {
    const meshRef = useRef()
    useFrame((state, delta) => {
//  meshRef.current.rotation.y += delta * 2
//  meshRef.current.rotation.x += delta * 2
        console.log(state)
    })

    return (
        <>
            <OrbitControls />
            <mesh position={[1,0,1]} ref={meshRef}>
                <boxGeometry args={[4,4,4]} />
                <meshBasicMaterial color="blue" wireframe/>
            </mesh>
        </>
    )
}

export default HeroSec
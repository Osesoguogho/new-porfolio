import React from 'react'
import { useProgress } from '@react-three/drei'

const CanvasLoader = () => {
    const {progress} = useProgress
  return (
    <div className='flex justify-center items-center'>{progress}%</div>
  )
}

export default CanvasLoader
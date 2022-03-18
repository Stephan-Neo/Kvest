import React from 'react';
import { Canvas, useFrame } from '@react-three/fiber'
import { Suspense } from 'react'
import Model from './model/Scene'
import { OrbitControls } from '@react-three/drei'


const AnimateFrame = (props) => {
    useFrame(({ clock }) => {
        props.meshRef.current.geometry.translate(1, 0, 0);
        props.meshRef.current.rotation.y -= 0.01;
    });
    return null;
} 

function Model3d(){
    const myMesh = React.useRef(null);
    return(
        <Canvas camera={{position: [18, 10, 20], zoom: 1 }}>
            <OrbitControls enableZoom={false} reverseOrbit={false} enableRotate={true} enablePan={false}/>
            <ambientLight intensity={0.5}/>
            <Suspense fallback={null}>
                <mesh ref={myMesh}>
                    <spotLight position={[20, 5, -10]} angle={0.9} />
                    <Model />
                    <AnimateFrame meshRef={myMesh} />
                </mesh>
            </Suspense>
        </Canvas> 
    )
}

export default Model3d;
import React, { Suspense, useEffect, useState, useRef } from 'react'
import { extend } from '@react-three/fiber'
import { Vector3 } from 'three'
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader'
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry'
import myFont from '../assets/fonts/League Gothic_Regular.json'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'

extend({ TextGeometry })

function Animation(props) {
    const font = new FontLoader().parse(myFont);
    const ref = useRef()
    useEffect( () => {
        ref.current.geometry.computeBoundingBox();
        let boundingBox = ref.current.geometry.boundingBox;
        let center = new Vector3()
        boundingBox.getCenter(center);
        ref.current.geometry.translate(-center.x,-center.y,-center.z);  
    });
    useFrame((state, delta) => (ref.current.rotation.y -= 0.005))
    return (
      <mesh
        {...props}
        ref={ref}
        >
        <textGeometry args={['FKN', {font, size:5, height: 3}]}/>
        <meshLambertMaterial attach='material' color={'hotpink'}/>
      </mesh>
      
    )
}

export default function Text() {
    return(
        <Canvas camera={{position: [10, 0, 28], zoom: 5}} shadows={{frustum: 3.75}}>
            <Suspense fallback={null}>
                <OrbitControls enableZoom={false} reverseOrbit={false} enableRotate={true} enablePan={false}/>
                <ambientLight intensity={0.4}/>
                <spotLight position={[-30, 10, 5]} angle={0.8} />
                <spotLight position={[30, 10, 5]} angle={0.8} />
                <Animation />
            </Suspense>
        </Canvas>
    )
}


{/* <mesh receiveShadow rotation={[-0.5 * Math.PI, 0, 0]} position={[0, -3, 0]}>
                        <planeGeometry attach="geometry" args={[500, 500]}/>
                        <meshStandardMaterial 
                            attach="material" 
                            color="white" transparent
                            opacity={0.6}
                            roughness={1}
                            metalness={0}
                        />
                    </mesh> */}


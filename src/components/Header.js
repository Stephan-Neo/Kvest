import React, {useRef} from 'react';
import { Canvas, useFrame } from '@react-three/fiber'
import { Suspense } from 'react'
import { OrbitControls } from '@react-three/drei';
import Model from './model/Scene'
import s from './styles/Header.module.css';

function Header() {
    return (
     <div className={s.preview}>
         <div className={s.greeting}>Hello</div>
         <div className={s.graphics}>
            <Canvas camera={{position: [15, 19, 15], zoom: 1}}>
                <OrbitControls />
                {/* <color attach='background' args={["lightblue"]}/> */}
                <ambientLight intensity={0.5}/>
                <spotLight position={[15, 15, 10]} angle={0.8} />
                <Suspense fallback={null}>
                    <Model />
                </Suspense>
            </Canvas>
        </div>
    </div> 
    
    );
  }
  
  export default Header;

  
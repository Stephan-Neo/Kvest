import React, {useRef} from 'react';
import { Canvas, useFrame } from '@react-three/fiber'
import { Suspense } from 'react'
import { OrbitControls } from '@react-three/drei';
import Model from './model/Scene'
import s from './styles/Header.module.css';
import { SpotLightHelper } from 'three';

const AnimateFrame = (props) => {
    useFrame(({ clock }) => {
      props.meshRef.current.rotation.y -= 0.01;
    });
    return null;
  }

function Header() {
    const myMesh = React.useRef();
    return (
     <div className={s.preview}>
         <div className={s.greeting}>Hello</div>
         <div className={s.graphics}>
           
            <Canvas camera={{position: [18, 10, 20], zoom: 1}}>
                {/* <color attach='background' args={["lightblue"]}/> */}
                
                    <OrbitControls />
                    <ambientLight intensity={0.5}/>
                    <spotLight position={[20, 5, -10]} angle={0.9} />
                    
                    <Suspense fallback={null}>
                        <mesh ref={myMesh}>
                            <Model />
                        </mesh>
                    </Suspense>
                <AnimateFrame meshRef={myMesh} />
            </Canvas>
        </div>
    </div> 
    
    );
  }
  
  export default Header;

  
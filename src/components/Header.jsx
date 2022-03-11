import React from 'react';
import { Canvas, useFrame } from '@react-three/fiber'
import { Suspense } from 'react'
import { OrbitControls } from '@react-three/drei';
import Model from './model/Scene'
import s from './styles/Header.module.css';
import { Link } from 'react-router-dom';
import { CustomLink } from './CustomLink';

const AnimateFrame = (props) => {
    useFrame(({ clock }) => {
      props.meshRef.current.rotation.y -= 0.01;
    });
    return null;
  }

function Header({id}) {
    const myMesh = React.useRef(null);
    return (
        <>
            <div className={s.preview}>
                <div className={s.greeting}>Вечерний квест {id}</div>
                <div className={s.graphics}>
                    <Canvas camera={{position: [18, 10, 20], zoom: 1 }}>
                        {/* <color attach='background' args={["lightblue"]}/> */}
                            <OrbitControls />
                            <ambientLight intensity={0.5}/>
                            <spotLight position={[20, 5, -10]} angle={0.9} />
                            
                            <Suspense fallback={null}>
                                <mesh ref={myMesh}>
                                    <Model />
                                </mesh>
                                <AnimateFrame meshRef={myMesh} />
                            </Suspense>
                    </Canvas>
                </div>
            </div> 
            <div className='link_container'>
                <CustomLink to='/day1'>День 1</CustomLink>
                <CustomLink to='/day2'>День 2</CustomLink>
            </div> 
        </>
    );
  }
  
  export default Header;

  
import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import ReactFullpage from '@fullpage/react-fullpage';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import NavDefault from '../components/Navbars/NavDefault';

function DayDefault(props){
    const [clicked, click] = useState(false)
    useEffect(() => {
        document.title =`Вечерний Квест | ${props.title}`;
    })
    return(
        <ReactFullpage
            scrollingSpeed = {700} 
            scrollHorizontally = {true}  
            sectionsColor={[]}
            css3={true}
            recordHistory={false}
            v2compatible={true}

            controlArrows={true}
            verticalCentered={true}
            paddingTop={''}
            fixedElements={'.root.header'}

            anchors={['page1', 'page2', 'page3', 'page4', 'page5', 'page6']}
            menu={'.header'}
            lockAnchors={false}
            render={({ state, fullpageApi }) => 
                <>
                    <ReactFullpage.Wrapper>
                        <div className='header' id={'default'}>
                            <Navbar Ap={fullpageApi} funcClick={click} clicked={clicked}/>
                            <NavDefault/>
                        </div>
                        <Header day={props.title} id={props.id}/>  
                        <div className="section" id={props.id}>
                            <div className="text_wrapper">
                                <div className="title">Описание</div>
                                <div className="text">
                                    {props.text}
                                </div>                              
                            </div>
                            
                        </div>
                    </ReactFullpage.Wrapper>
                    
                </>                                         
            }
        />
    )
}

export default DayDefault 
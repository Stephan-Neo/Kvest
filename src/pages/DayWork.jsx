import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import ReactFullpage from '@fullpage/react-fullpage';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Tasks from '../components/forms/Tasks';
import NavWork from '../components/Navbars/NavWork';
import { useNavigate } from "react-router-dom";

function DayWork(props){
    // day1
    const accesDay = 'end'
    let navigate = useNavigate()
    const [clicked, click] = useState(false)
    useEffect(() => {
        document.title =`Вечерний Квест | ${props.title}`
        
    })
    // useEffect(() => {
    //     let login = localStorage.getItem('login')
    //     if(!login){
    //         return navigate('/')
    //     }
    //     // control access day 
    //     if(props.id !== accesDay){
    //         return navigate('/')
    //     }

        
    // }, [])

    // control access day 
    // useEffect(() => {
    //     if(props.id !== accesDay){
    //         return navigate('/')
    //     }
    // }, [props.id])
    
    return(
        <ReactFullpage
            scrollingSpeed = {700} 
            scrollHorizontally = {true}  
            sectionsColor={[]}
            css3={true}
            recordHistory={false}
            
            controlArrows={true}
            verticalCentered={true}
            paddingTop={''}
            fixedElements={'.root.header'}

            anchors={['page1', 'page2', 'page3', 'page4', 'page5', 'page6']}
            menu={'.header'}
            lockAnchors={false}
            render={({ state, fullpageApi }) => 
                    <ReactFullpage.Wrapper>
                        <div className='header' id={'day'}>
                            <Navbar Ap={fullpageApi} funcClick={click} clicked={clicked}/>
                            <NavWork />
                        </div>
                        <Header day={props.title} id={props.id}/>  
                        <Tasks id={props.id} clicked={clicked}/>
                    </ReactFullpage.Wrapper>                                        
            }
        />
    )
}

export default DayWork 
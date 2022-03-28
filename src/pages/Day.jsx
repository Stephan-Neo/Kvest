import React, { useEffect } from 'react';
import s from './styles/Day.module.css'
import Navbar from '../components/Navbar';
import ReactFullpage from '@fullpage/react-fullpage';

function Day(props) {
    useEffect(() => {
        document.title = props.title;
    })
    return(
        <>  
            <div className={s.navbar_wrapper}>
                <Navbar Nav={props.Nav}/>
            </div>
            {props.DayComponent}
        </> 
    )
}

export default Day;


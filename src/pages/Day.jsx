import React from 'react';
import Header from '../components/Header';
import s from './styles/Day.module.css'

function Day(props) {
    return(
        <>
            <Header id_day={props.id_day}/>
            <div className={s.task}>
                {props.text}
                {props.id_day}
            </div>
        </>
        
    )
}

export default Day;


import React, { useEffect } from 'react';
import DayWork from './DayWork';


function Day(props){
    useEffect(() => {
        const rootDiv = document.querySelector('#root')
        const head = document.querySelector('.header')
        rootDiv.append(head)
    })   
    return(
        <div className='wrapperGlobal'>
        {props.content}
        </div>

    )
}

export default Day 
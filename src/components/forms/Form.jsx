import React from 'react';
import Model3d from '../Model3d';
import s from "../styles/SignUp.module.css"

function Form({children}) {
    return(
        <div className={s.wrapper}>
            <div className={s.graphics}>
                <Model3d />
            </div>
            {children}
        </div>        
    )
}

export default Form;


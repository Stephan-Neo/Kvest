import React from 'react';
import { Outlet } from 'react-router-dom';
import s from './styles/MainPage.module.css'

function MainPage() {
    return(
        <>
        <div className={s.wrapper_content}>
            <Outlet />
        </div>
        </>        
    )
}

export default MainPage;


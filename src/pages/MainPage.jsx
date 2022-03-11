import React from 'react';
import Header from '../components/Header';
import { Link, Outlet } from 'react-router-dom';

function MainPage() {
    return(
        <>
            <Header />
            <Outlet />
        </>        
    )
}

export default MainPage;


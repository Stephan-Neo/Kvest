import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import './styles/Navbar.css'
import { IconContext } from "react-icons"
import {SidebarDataLogin} from "../mockup/SidebarDataLogin"
import {SidebarDataPublic} from "../mockup/SidebarDataPublic"
import LinkPublic from './LinkPublic';
import LinkLogin from './LinkLogin';
import MenInformation from './MenInformation';

function Navbar(props) {
    const [sidebar, setSidebar] = useState(false)
    useEffect(() => {
        props.funcClick(false)
    })
    const showSidebar = () => setSidebar(!sidebar);
    return (
        <IconContext.Provider value={{color: '#fff'}}>
            <div className="burger">
                <div className='navbar'>
                        <span className='menu-bars' onClick={showSidebar}>
                            <FaIcons.FaBars/>
                        </span>
                </div>
                <nav className={sidebar ? 'nav-menu active': 'nav-menu'}>
                    <ul className='nav-menu-items' onClick={showSidebar}>
                        <div className="day">
                            <li className="navbar-toggle">
                                <span  className='menu-bars'>
                                    <AiIcons.AiOutlineClose />
                                </span>
                            </li>
                            {localStorage.getItem('login') ? SidebarDataLogin.map((item, index) => {
                                return (
                                    <li key={index} className={item.cName} id={item.id}>
                                        <Link to={item.path} onClick={() => {
                                            props.Ap.moveTo(1)
                                            props.funcClick(true)                       
                                            }}>
                                            {item.icon}
                                            <span>{item.title}</span>
                                        </Link>
                                    </li>
                                )
                            }): SidebarDataPublic.map((item, index) => {
                                return (
                                    <li key={index} className={item.cName} id={item.id}>
                                        <Link to={item.path} onClick={() => {
                                            props.Ap.moveTo(1)
                                            props.funcClick(true)                       
                                            }}>
                                            {item.icon}
                                            <span>{item.title}</span>
                                        </Link>
                                    </li>
                                )
                            })}
                        </div>
                        {localStorage.getItem('login') ? <MenInformation/>: console.log()}
                        {localStorage.getItem('login') ? <LinkLogin/>: <LinkPublic/>}
                    </ul>
                </nav>
            </div>
        </IconContext.Provider>
    )
}

export default Navbar
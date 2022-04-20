import React from 'react'
import * as FiIcons from 'react-icons/fi'
import * as AiIcons from 'react-icons/ai'
import * as FcIcons from 'react-icons/fc'
import * as BsIcons from 'react-icons/bs'

export const SidebarDataLoginDay1 = [
    {
        title: 'День 1',
        path: '/day1',
        icon: <BsIcons.BsJournalCheck />,
        cName: 'nav-text',
        id: ''
    },
    {
        title: 'День 2',
        path: '/day2',
        icon: <FiIcons.FiCoffee />,
        cName: 'nav-text',
        id: ''
    },
    {
        title: 'День 3',
        path: '/day3',
        icon: <FiIcons.FiCoffee />,
        cName: 'nav-text',
        id: ''
    },
    {
        title: 'День 4',
        path: '/day4',
        icon: <FiIcons.FiCoffee />,
        cName: 'nav-text',
        id: 'last-day'
    },
    {
        title: 'Главная',
        path: '/',
        icon: <AiIcons.AiOutlineHome />,
        cName: 'nav-text',
        id: 'mainpage-link'
    },
    {
        title: 'О нас',
        path: '/aboutus#page2',
        icon: <FcIcons.FcAbout />,
        cName: 'nav-text',
        id: ''
    },
]
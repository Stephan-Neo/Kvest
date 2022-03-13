import React from 'react';
import s from './styles/Header.module.css';
import { CustomLink } from './CustomLink';
import { motion } from 'framer-motion';
import Text from './Text';
import Model3d from './Model3d';

function Header(props) {
    return (
        <>
            <div className={s.preview}>
                <motion.div className={s.greeting}>
                    <span>Вечерний квест</span>
                    <span>День {props.id_day}</span>
                </motion.div>
                <div className={s.graphics}>
                    <Text />
                    {/* <Model3d /> */}
                </div>
            </div> 
            <div className='link_container'>
                <CustomLink to='/day1'>День 1</CustomLink>
                <CustomLink to='/day2'>День 2</CustomLink>
                <CustomLink to='/day3'>День 3</CustomLink>
                <CustomLink to='/day4'>День 4</CustomLink>
                <CustomLink to='/day5'>День 5</CustomLink>
            </div> 
        </>
    );
  }
  
export default Header;

  
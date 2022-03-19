import React from 'react';
import s from './styles/Header.module.css';
import { CustomLink } from './CustomLink';
import { motion } from 'framer-motion';
import Text from './Text';
import Model3d from './Model3d';
import { Link } from 'react-router-dom';

function Header(props) {
    return (
        <>
            <div className={s.preview}>
                <motion.div  className={s.greeting}>
                    <span>Вечерний квест {props.id_day}</span>
                </motion.div>
                <motion.div className={s.graphics}>
                    <Text />
                    {/* <Model3d /> */}
                </motion.div>
            </div> 
            <div className={s.link_container}>
                <CustomLink to='/day1'>День 1</CustomLink>
                <CustomLink to='/day2'>День 2</CustomLink>
                <CustomLink to='/day3'>День 3</CustomLink>
                <CustomLink to='/day4'>День 4</CustomLink>
                <CustomLink to='/day5'>День 5</CustomLink>
            </div>
            <div className={s.form_links}>
                <Link to='/signup' className={s.link_f}>Регистрация</Link>
                <Link to='/login' className={s.link_f}>Войти</Link>
            </div> 
        </>
    );
  }
  
export default Header;

  
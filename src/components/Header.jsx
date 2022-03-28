import React from 'react';
import s from './styles/Header.module.css';
import Text from './Text';
import Model3d from './Model3d';
import { Link } from 'react-router-dom';

function Header(props) {
    return(
       <>   
            <div className='section' id={props.id}>
                <div className={s.preview}>
                    <div  className={s.greeting}>
                        <span>
                            Вечерний квест
                        </span>
                        <span>
                            {props.day}
                        </span>
                    </div>
                    <div className={s.graphics}>
                        <Text />
                        {/* <Model3d /> */}
                    </div>
                </div>
            </div>
       </>            
    )
}


  
export default Header;

  
import React from 'react';
import Header from '../components/Header';
import s from './styles/Day.module.css'
import ReactFullpage from '@fullpage/react-fullpage';

function DayDefault(props){
    return(
    <>
        <ReactFullpage
            scrollingSpeed = {700} 
            scrollHorizontally = {true}  
            sectionsColor={[""]}
            css3={true}
            recordHistory={false}
            paddingTop={200}
            
            anchors={['page1', 'page2', 'page3', 'page4', 'page5']}
            menu={'#myMenu'}
            lockAnchors={false}
            render={({ state, fullpageApi }) => 
                <ReactFullpage.Wrapper>
                    <Header day={props.day} id={props.id}/>  
                    <div className='section' id={props.id}>
                        <div className={s.task}>
                            {props.text}
                        </div>
                    </div> 
                </ReactFullpage.Wrapper>
            }
        />
    </>
    )
}

export default DayDefault
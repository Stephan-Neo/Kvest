import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './pages/MainPage';
import Day from './pages/Day';
import LogIn from './components/forms/LogIn'
import SignUp from './components/forms/SignUp'
import Form from "./components/forms/Form"
import NavWork from './components/Navbars/NavWork'
import DayDefault from './pages/DayDefault';
import NavDefault from './components/Navbars/NavDefault'
import DayWork from './pages/DayWork';
import NotFound from './pages/NotFound'
import Description from './components/Description';

const textMain = "Встречайте! Самый загадочный среди загадочных и самый таинственный среди таинственных мероприятий – ежедневный «Вечерний Квест»!&nbsp; В этом году вам предстоит столкнуться с различными довольно трудными загадками, которые, по правде говоря, не каждый сможет решить. Они будут тесно связаны с криптографией. Квест будет проходить онлайн, за исключением первого этапа, где участники должны будут получить свой первый ключ. Стоит обратить внимание, что количество участников одной команды могут быть от 1-го до 5-ти человек максимум. Собирайте команду, включайте мозг, набирайтесь терпения и вперед навстречу трудностям! Желаем удачи, и пусть победит самые сообразительные!"

ReactDOM.render( 
  <BrowserRouter>
            <Routes>             
              <Route path='/' element={<MainPage />}>
                <Route path='/' element={<Day content={<DayDefault text={<Description/>} id={'day1'} title={'Главная'}/>}/>}/>
                <Route path='aboutus' element={<Day content={<DayDefault text={'Описание'} id={'day1'} title={'О нас'}/>}/>}/>
                <Route path="day1" element={<Day content={<DayWork  id={'day1'} title={'День 1'}/>}/>}/>
                <Route path="day2" element={<Day content={<DayWork  id={'day2'} title={'День 2'}/>}/>}/>
                <Route path="day3" element={<Day content={<DayWork  id={'day3'} title={'День 3'}/>}/>}/>
                <Route path="day4" element={<Day content={<DayWork  id={'day4'} title={'День 4'}/>}/>}/>
                <Route path="*" element={<NotFound/>}/>
              </Route> 
              {/* <Route path='/signup' element={<Form children={<SignUp/>}/>}/> */}
              <Route path='/login' element={<Form children={<LogIn/>}/>}/>  
            </Routes>
    </BrowserRouter>
  ,document.getElementById('root'));

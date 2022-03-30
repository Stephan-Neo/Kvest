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

ReactDOM.render( 
  <BrowserRouter>
            <Routes>             
              <Route path='/' element={<MainPage />}>
                <Route path='/' element={<Day content={<DayDefault text={'Описание'} id={'day1'} title={'Главная'}/>}/>}/>
                <Route path='aboutus' element={<Day content={<DayDefault text={'Описание'} id={'day1'} title={'О нас'}/>}/>}/>
                <Route path="day1" element={<Day content={<DayWork  id={'day1'} title={'День 1'}/>}/>}/>
                <Route path="day2" element={<Day content={<DayWork  id={'day2'} title={'День 2'}/>}/>}/>
                <Route path="day3" element={<Day content={<DayWork  id={'day3'} title={'День 3'}/>}/>}/>
                <Route path="day4" element={<Day content={<DayWork  id={'day4'} title={'День 4'}/>}/>}/>
              </Route> 
              <Route path='/signup' element={<Form children={<SignUp/>}/>}/>
              <Route path='/login' element={<Form children={<LogIn/>}/>}/>  
            </Routes>
    </BrowserRouter>
  ,document.getElementById('root'));

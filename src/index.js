import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './pages/MainPage';
import Day from './pages/Day';
import Header from './components/Header';
import LogIn from './components/forms/LogIn'
import SignUp from './components/forms/SignUp'
import Form from "./components/forms/Form"
import DayDefault from './pages/DayDefault'
import DayWork from './pages/DayWork'
import NavWork from './components/Navbars/NavWork'
import NavDefault from './components/Navbars/NavDefault'

ReactDOM.render(
  <BrowserRouter>
            <Routes>
              <Route path='/' element={<Day DayComponent={<DayDefault text={'default'} id={'day1'}/>} Nav={<NavDefault/>} title={'Вечерний Квест'}/>}/>
              <Route path='/' element={<MainPage />}>
                <Route path="day1" element={<Day DayComponent={<DayWork text={'lorem10'} day={'День 1'} id={'day1'}/>} Nav={<NavWork/>} title={'Вечерний Квест | День 1'}/>} />
                <Route path="day2" element={<Day DayComponent={<DayWork text={'lorem12'} day={'День 2'} id={'day2'}/>} Nav={<NavWork/>} title={'Вечерний Квест | День 2'}/>} />
                <Route path="day3" element={<Day DayComponent={<DayWork text={'lorem14'} day={'День 3'} id={'day3'}/>} Nav={<NavWork/>} title={'Вечерний Квест | День 3'}/>} />
                <Route path="day4" element={<Day DayComponent={<DayWork text={'lorem16'} day={'День 4'} id={'day4'}/>} Nav={<NavWork/>} title={'Вечерний Квест | День 4'}/>} />
              </Route>
              <Route path='/aboutus' element={<Day DayComponent={<DayDefault text={'о нас'} day={'О нас'} id={'day1'}/>} Nav={<NavDefault/>} title={'Вечерний Квест | О нас'}/>}/>
              <Route path='signup' element={<Form children={<SignUp/>}/>}/>
              <Route path='login' element={<Form children={<LogIn/>}/>}/>  
            </Routes>
    </BrowserRouter>
  ,document.getElementById('root'));

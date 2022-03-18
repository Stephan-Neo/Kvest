import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './pages/MainPage';
import Day from './pages/Day';
import Header from './components/Header';
import SignUp from './components/forms/SignUp'

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path='/signup' element={<SignUp/>}/>
      <Route path='/' element={<Header />}/>
      <Route path='/' element={<MainPage />}>
        <Route path="day1" element={<Day text={'Lrtretrtert'} id_day={'День 1'}/>} />
        <Route path="day2" element={<Day text={'dfgdfgdfgdd'} id_day={'День 2'}/>} />
        <Route path="day3" element={<Day text={'dfgdfgdfgdd'} id_day={'День 3'}/>} />
        <Route path="day4" element={<Day text={'dfgdfgdfgdd'} id_day={'День 4'}/>} />
        <Route path="day5" element={<Day text={'dfgdfgdfgdd'} id_day={'День 5'}/>} />
      </Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);

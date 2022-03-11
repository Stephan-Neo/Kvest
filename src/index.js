import React from 'react';
import ReactDOM from 'react-dom';
import { useRoutes, BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './pages/MainPage';
import Day from './pages/Day';
import Header from './components/Header';


// const routes = [
//   {
//     path: '/',
//     element: <MainPage />,
//     children: [
//       {path: "day1", element: <Day1 />},
//       {path: "day2", element: <Day2 />}
//     ]
//   }
// ];

// function App() {
//   let routing = useRoutes(routes)
//   return routing;
// }

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<MainPage />}>
        <Route path="day1" element={<Day text={'Lrtretrtert'} />} />
        <Route path="day2" element={<Day text={'dfgdfgdfgdd'} />} />
      </Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);

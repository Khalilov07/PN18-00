import './App.css'; // подключение css файла

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import HomePage from './pages/HomePage/HomePage';
import AboutPage from './pages/AboutPage/AboutPage';
import ContactPage from './pages/ContactPage/ContactPage';
import AddCourse from './pages/AddCourse/AddCourse';

import { Routes, Route } from 'react-router-dom' // берём их из библиотеки
import SingleCourse from './pages/SignleCourse/SingleCourse';
import RegisterPage from './pages/RegisterPage/RegisterPage';
import LoginPage from './pages/LoginPage/LoginPage';
import { useState } from 'react';

// функция - компонент

// <></> - react fragment - пусты

// jsx - html + js

// class => className

const App = () => {

  // const header = document.querySelector(".header")
  // header.innerHTML = `<h1>${date}</h1>`
  // toString() - object => строку

  // react router dom - маршрутизация по страницам
  // Routes - это родитель маршрутов

  // http://localhost:3000/

  const [user, setUser] = useState(null)

  return (
    <>
      <Header />

      {/* 
        path - это url путь
        http://localhost:3000/
      */}

      {/* 
      
        создать ещё одну страницу которую вы назовёте contact 

      */}

      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/contact' element={<ContactPage />} />
        <Route path='/addcourse' element={<AddCourse />} />
        <Route path='/singlecourse/:id' element={<SingleCourse />} />
        <Route path='/signup' element={<RegisterPage />} />
        <Route path='/signin' element={<LoginPage />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
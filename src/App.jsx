import './App.css'; // подключение css файла
import Main from './components/Main/Main';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

import HomePage from './pages/HomePage/HomePage';
import AboutPage from './pages/AboutPage/AboutPage';

import { Routes, Route } from 'react-router-dom'

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

  return (
    <>
      <Header />

      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='about' element={<AboutPage />} />
      </Routes>

      <Main />

      <Footer />
    </>
  );
}

export default App;
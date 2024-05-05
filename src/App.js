/*-- dependencies --*/
import './App.css';
import { React , useState } from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
/*-- components --*/
import Header from './components/Header/Header.js'
import Footer from './components/Footer/Footer.js'
/*-- pages --*/
import Home from './pages/HomePage/HomePage.js'
import SignUp from './pages/SignUp/SignUp.js'
import LogIn from './pages/LogIn/LogIn.js'

function App() {
  
  
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/signup" element={<SignUp/>} />
            <Route path="/login" element={<LogIn />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
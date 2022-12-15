import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { appendScript, getScriptsFiles } from './Funcs';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Header from './pages/Header';
import Footer from './pages/Footer';
import $ from "jquery";
import "jquery-ui-dist/jquery-ui"

function App() {
  useEffect(() => {
    {
      getScriptsFiles().map((value, index) => {
        appendScript(value);
      })
    }
  }, []);

  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About is_page={true} />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;

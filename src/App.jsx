import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css'
import Navbar from './pages/Navbar';
import Home from './pages/Home';
import Exercises from './pages/Exercises';

function App() {
  return (
    <div className='p-5'>
      <Navbar />
      {/* <BrowserRouter> */}
        {/* <Routes> */}
          {/* <Route path='/' element={<Home />} /> */}
          <Home />
          {/* <Route path='/exercise' element={<Exercises />} /> */}
          <Exercises />
        {/* </Routes> */}
      {/* </BrowserRouter> */}
    </div>
  )
}

export default App;

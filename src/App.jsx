import React from 'react';
import { Routes, Route } from 'react-router-dom';

import './App.css'
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Exercises from './pages/Exercises';
import ExerciseCard from './components/ExerciseCard';

function App() {
  return (
    <div className=''>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        {/* <Route path='/exercise/:id' element={<Exercises />} /> */}
      </Routes>
        <Exercises />
        <ExerciseCard/>
    </div>
  )
}

export default App;

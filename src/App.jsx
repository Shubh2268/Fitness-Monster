import React from 'react';
import './App.css'
import Navbar from './pages/Navbar';
import Home from './pages/Home';
import Exercises from './pages/Exercises';

function App() {
  return (
    <div className='p-5'>
      <Navbar />
      <Home />
      <Exercises />
    </div>
  )
}

export default App;

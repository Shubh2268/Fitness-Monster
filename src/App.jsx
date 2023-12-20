import React from 'react';
import './App.css'
import Navbar from './components/Navbar';
import Home from './components/Home';

function App() {
  return (
    <div className='p-5'>
      <Navbar />
      <Home />
    </div>
  )
}

export default App;

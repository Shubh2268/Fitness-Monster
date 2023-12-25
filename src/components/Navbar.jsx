import React from 'react';
import logo from '../assets/logo.webp';
// import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='flex items-center justify-between px-10 pt-5 bg-slate-800 text-white'>
      <div className='flex items-center justify-center'>
        <img src={logo} alt="logo" className='w-10 rounded-full' />
        <p className='text-2xl font-bold p-2 italic'>Fitness Monster</p>
      </div>
      <div className='mr-14'>
        <a href='' className='text-lg p-2 mx-3 italic font-medium underline'>Home</a>
        <a href='' className='text-lg p-2 mx-3 italic font-medium hover:underline'>Exercises</a>
      </div>
    </div>
  )
}

export default Navbar;

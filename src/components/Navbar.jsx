import React from 'react';
import logo from '../assets/logo.webp';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='flex items-center justify-between px-10 py-5 bg-slate-900 text-white'>
      <Link to='/' className='flex items-center justify-center'>
        <img src={logo} alt="logo" className='w-8 md:w-10 rounded-full' />
        <h2 className='textxl md:text-2xl font-bold p-2 italic'>Fitness Monster</h2>
      </Link>
      <div className='mr-1 md:mr-14'>
        <Link to='/' className='text-base md:text-lg p-1 md:p-2 mx-1 md:mx-3 italic font-medium md:font-semibold underline tracking-wide'>Home</Link>
        <a href='#exercises' className='text-base md:text-lg p-1 md:p-2 mx-1 md:mx-3 italic font-medium md:font-semibold hover:underline tracking-wide'>Exercises</a>
      </div>
    </div>
  )
}

export default Navbar;

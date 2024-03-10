import React from 'react';
import logo from '../assets/logo.webp';

const Footer = () => (
  <div className='mt-10 md:mt-20 py-5 md:py-10 flex flex-col items-center justify-center bg-slate-900 text-white'>
    <div className='flex items-center justify-center'>
      <img src={logo} alt='logo' className='w-8 md:w-10 rounded-full' />
      <h2 className='text-xl md:text-2xl font-bold p-2 italic'>Fitness Monster</h2>
    </div>
    <p className='text-base md:text-xl p-2 font-medium italic text-center w-2/3 md:w-full'>Designed and Developed by <span className='uppercase bg-gradient-to-r from-red-600 to-slate-200 bg-clip-text text-transparent font-semibold'>shubham tiwari</span></p>
  </div>
);

export default Footer;

import React from 'react';
import banner from '../assets/banner.png';

const Home = () => {
  return (
    <div className='flex items-center px-10 py-10 md:py-1 bg-slate-900'>
      <div className='w-full md:w-1/2 ml-5 md:mt-16'>
        <h1 className='text-2xl md:px-4 text-center md:text-start sm:text-5xl md:text-[80px] bg-gradient-to-r from-slate-300 to-red-500 bg-clip-text text-transparent tracking-tight font-bold uppercase'>empower your body, <p>energize your mind</p></h1>
        <p className='hidden md:flex w-3/4 text-slate-300 text-base px-5 py-2 capitalize'>A huge selection of fitness content and transformation guides to help you get fit and stay fit. Start your workout journey with fitness monster.</p>
        <p className='md:hidden text-center text-slate-300 text-xs p-5 font-medium italic capitalize'>fuel your fitness revolution with fitness monster.</p>
        <div className='flex items-center justify-center md:justify-start'>
          <button className='bg-red-600 hover:bg-red-500 my-3 md:my-5 md:mx-5 px-6 py-2 md:py-3 text-sm md:text-lg font-semibold italic text-white capitalize rounded-md'>join club</button>
        </div>
      </div>
      <div className='hidden w-1/2 md:flex items-center justify-center'>
        <img src={banner} alt="heroimg" className='w-[390px] ml-36 mt-8' />
      </div>
    </div>
  )
}

export default Home;

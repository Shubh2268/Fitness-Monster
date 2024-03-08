import React from 'react';
import banner from '../assets/banner.png';

const Header = () => {
  return (
    <div className='flex items-center px-10 md:px-20 py-10 md:pt-0 md:pb-5 bg-slate-900'>
      <div className='w-full md:w-1/2 md:mt-16'>
        <h1 className='text-2xl md:px-4 text-center md:text-start md:text-4xl lg:text-5xl xl:text-7xl bg-gradient-to-r from-slate-300 to-red-500 bg-clip-text text-transparent tracking-tight font-bold uppercase'>empower your body, <p>energize your mind</p></h1>
        <p className='text-center sm:text-start text-slate-300 text-xs sm:text-sm xl:text-lg p-5 font-medium italic capitalize'>fuel your fitness revolution with fitness monster.</p>
        <div className='flex items-center justify-center md:justify-start'>
          <button className='bg-red-600 hover:bg-red-500 my-3 lg:my-5 md:mx-4 md:my-0 lg:mx-5 px-6 py-2 lg:py-3 text-sm lg:text-lg font-semibold italic text-white capitalize rounded-md'>join club</button>
        </div>
      </div>
      <div className='hidden w-1/2 md:flex items-center justify-center'>
        <img src={banner} alt="heroimg" className='sm:w-[200px] xl:w-[390px] ml-36 mt-8' />
      </div>
    </div>
  )
}

export default Header;

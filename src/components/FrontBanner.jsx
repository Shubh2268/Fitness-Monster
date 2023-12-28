import React from 'react';
import banner from '../assets/banner.png';

const Home = () => {
  return (
    <div className='flex items-center px-10 py-10 bg-slate-900'>
      <div className='w-1/2'>
        <h1 className='text-9xl text-white font-bold italic tracking-tight uppercase'>workout <p>with me</p></h1>
        <p className='mt-2 px-4 py-2 text-gray-200'>A huge selection of health and fitness content, healthy recipes and transformation guides to help you get fit and stay fit. </p>
        <button className='bg-red-600 hover:bg-red-500 mx-4 mt-6 px-6 py-3 text-xl font-semibold italic text-white capitalize rounded-md'>join club</button>
      </div>
      <div className='w-1/2 flex items-center justify-center'>
        <img src={banner} alt="heroimg" className='w-3/5 ml-36' />
      </div>
    </div>
  )
}

export default Home;

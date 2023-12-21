import React from 'react';
import HeroImage from '../assets/hero.png';

const Home = () => {
  return (
    <div className='flex items-center px-10 mx-16 my-10'>
      <div className='w-1/2'>
        <h1 className='text-9xl font-extrabold italic tracking-tight uppercase'>workout <p>with me</p></h1>
        <p className='mt-2 px-4 py-2 text-gray-300 italic'>A huge selection of health and fitness content, healthy recipes and transformation guides to help you get fit and stay fit. </p>
        <button className='bg-[#E6533C] mx-4 mt-6 px-6 py-3 text-xl font-semibold italic text-white capitalize rounded-md'>join club</button>
      </div>
      <div className='w-1/2'>
        <img src={HeroImage} alt="heroimg" className='w-3/5 ml-36' />
      </div>
    </div>
  )
}

export default Home;

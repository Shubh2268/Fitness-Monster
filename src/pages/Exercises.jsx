import React from 'react';
import HorizontalScrollbar from '../components/HorizontalScrollbar';

const Exercises = () => {
    return (
        <div className='mt-16 pt-10 '>
            <div className='flex items-center justify-center'>
                <h1 className='font-bold text-4xl capitalize'>exercises you should know</h1>
            </div>
            <div className='flex items-center justify-center'>
                <input type="text" placeholder='Search exercises by name, bodypart or equipment . . .' className='my-8 w-3/5 p-3 text-lg bg-slate-800 text-white capitalize placeholder:normal-case outline-none rounded-lg border-r-0 placeholder:text-gray-400' />
                <button className='px-7 py-3 border-none -ml-4 bg-red-500 hover:bg-red-600 text-white text-lg font-bold rounded-md italic tracking-wide'>Search</button>
            </div>
            <div>
                <HorizontalScrollbar />
            </div>
        </div>
    )
}

export default Exercises;

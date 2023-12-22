import React from 'react'

const Exercises = () => {
    return (
        <div className='mt-20 pt-10 '>
            <div className='flex items-center justify-center'>
                <h1 className='font-bold text-4xl capitalize'>exercises you should know</h1>
            </div>
            <div className='flex items-center justify-center'>
                <input type="text" placeholder='search exercises...' className='my-8 w-3/5 p-3 text-lg bg-slate-900 capitalize border-s-2 border-slate-400 outline-none rounded-lg border-r-0' />
                <button className='px-7 py-3 border-none -ml-2 bg-[#E6533C] hover:bg-[#d14630] text-lg font-bold rounded-md italic tracking-wide'>Search</button>
            </div>
        </div>
    )
}

export default Exercises

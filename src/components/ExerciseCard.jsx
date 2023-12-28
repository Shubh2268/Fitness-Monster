import React from 'react';
import { Link } from 'react-router-dom';

const ExerciseCard = () => {
    return (
        <div className='p-10 w-1/3'>
            <Link to={'/exercise/:id'}>
                <img src="https://v2.exercisedb.io/image/PsDLD7dmJxQttF" alt="gif" className='border-t-4 border-slate-800' />
                <div className='flex'>
                    <button className='ml-5 px-4 py-2 bg-slate-600 text-white text-base rounded-3xl capitalize'>Waist</button>
                    <button className='ml-5 px-4 py-2 bg-red-500 text-white text-base rounded-3xl capitalize'>Abs</button>
                </div>
                <h4 className='ml-2 text-2xl p-4 font-semibold tracking-wide'>Air Bike</h4>
            </Link>
        </div>
    )
}

export default ExerciseCard;

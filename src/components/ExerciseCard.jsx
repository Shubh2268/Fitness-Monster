import React from 'react';
import { Link } from 'react-router-dom';

const ExerciseCard = ({ exercise }) => {
    return (
        <Link to={`/exercise/${exercise.id}`} className='w-[250px] h-[260px] md:w-[400px] md:h-[445px] border-t-2 md:border-t-4 border-slate-800 flex justify-between flex-col mx-0 md:mx-10 my-12'>
            <img src={exercise.gifUrl} alt={exercise.name} className='h-[326px]' />
            <div className='flex'>
                <button className='ml-5 px-3 md:px-4 py-2 bg-slate-600 text-white text-xs md:text-base rounded-3xl capitalize'>{exercise.bodyPart}</button>
                <button className='ml-5 px-3 md:px-4 py-2 bg-red-500 text-white text-xs md:text-base rounded-3xl capitalize'>{exercise.target}</button>
            </div>
            <h4 className='ml-2 text-base md:text-2xl text-wrap p-4 font-semibold tracking-wide capitalize'>{exercise.name}</h4>
        </Link>
    )
}

export default ExerciseCard;

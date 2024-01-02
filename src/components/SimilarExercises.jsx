import React from 'react';
import HorizontalScrollbar from './HorizontalScrollbar';
import Loader from './Loader';


const SimilarExercises = ({ targetMuscleExercises, equipmentExercises }) => {
  return (
    <div className='mt-24'>
      <h2 className='font-bold text-4xl capitalize text-center'>similar <span className='text-red-600'>target muscle</span> exercises</h2>
      <div className='p-2'>
        {targetMuscleExercises !== 0 ? <HorizontalScrollbar data={targetMuscleExercises} /> : <Loader />}
      </div>

      <h2 className='font-bold text-4xl capitalize text-center'>similar <span className='text-red-600'>equipment</span> exercises</h2>
      <div className='p-2'>
        {equipmentExercises !== 0 ? <HorizontalScrollbar data={targetMuscleExercises} /> : <Loader />}
      </div>
    </div>
  )
}

export default SimilarExercises;

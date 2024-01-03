import React from 'react';
import HorizontalScrollbar from './HorizontalScrollbar';
import Loader from './Loader';


const SimilarExercises = ({ targetMuscleExercises, equipmentExercises }) => {
  return (
    <div className='mt-20'>
      <h2 className='font-bold text-4xl capitalize text-center mt-6'>similar <span className='text-red-600'>target muscle</span> exercises</h2>
      <div>
        {targetMuscleExercises !== 0 ? <HorizontalScrollbar data={targetMuscleExercises} /> : <Loader />}
      </div>

      <h2 className='font-bold text-4xl capitalize text-center mt-16'>similar <span className='text-red-600'>equipment</span> exercises</h2>
      <div>
        {equipmentExercises !== 0 ? <HorizontalScrollbar data={targetMuscleExercises} /> : <Loader />}
      </div>
    </div>
  )
}

export default SimilarExercises;

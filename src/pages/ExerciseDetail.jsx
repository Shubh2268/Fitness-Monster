import React, { useState } from 'react';
import Detail from '../components/Detail';
import SimilarExercises from '../components/SimilarExercises';
import { fetchData, exerciseOptions } from '../utils/fetchData';
import { useParams } from 'react-router-dom';

const ExerciseDetail = () => {

  return (
    <div className='my-14'>
      <Detail />
      <SimilarExercises />
    </div>
  )
}

export default ExerciseDetail;

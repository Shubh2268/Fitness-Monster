import React, { useEffect, useState } from 'react';

import ExerciseCard from '../components/ExerciseCard';
import Loader from '../components/Loader';
import { exerciseOptions, fetchData } from '../utils/fetchData';

const Exercises = ({ exercises, setExercises, bodyPart }) => {

  const [currentPage, setCurrentPage] = useState(1);
  const [exercisesPerPage] = useState(6);

  useEffect(() => {
    const fetchExercisesData = async () => {
      let exerciseData = [];

      if (bodyPart === 'all') {
        exerciseData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions);
      } else {
        exerciseData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`, exerciseOptions);
      }

      setExercises(exerciseData);
    };

    fetchExercisesData();
  }, [bodyPart]);

  const indexOfLastExercise = currentPage * exercisesPerPage;
  const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;
  const currentExercises = exercises.slice(indexOfFirstExercise, indexOfLastExercise);

  if (!currentExercises.length) {
    return <Loader />
  }

  return (
    <div name='exercises' className='my-5'>
      <div className='flex items-center justify-center'>
        <h1 className='font-bold text-4xl capitalize mt-10 mb-3'>showing results</h1>
      </div>
      <div className='my-7'>
        <div className='flex flex-wrap items-center justify-center'>
          {currentExercises.map((exercise, id) => (
            <ExerciseCard key={id} exercise={exercise} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Exercises;

import React, { useEffect, useState } from 'react';
import { Pagination } from '@mui/material';

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

  // Pagination 
  const indexOfLastExercise = currentPage * exercisesPerPage;
  const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;
  const currentExercises = exercises.slice(indexOfFirstExercise, indexOfLastExercise);

  const paginate = (value) => {
    setCurrentPage(value);

    window.scrollTo({ top: 100, behavior: 'smooth' });
  };

  if (!currentExercises.length) {
    return <Loader />
  }

  return (
    <div id='exercises' className='my-16 md:my-24'>
      <div className='flex items-center justify-center my-5'>
        <h1 className='font-bold text-2xl md:text-4xl capitalize'>showing results</h1>
      </div>
      <div className='my-1'>
        <div className='flex flex-wrap items-center justify-center'>
          {currentExercises.map((exercise, id) => (
            <ExerciseCard key={id} exercise={exercise} />
          ))}
        </div>
        <div className='flex items-center justify-center mt-20 md:mt-0'>
          {exercises.length > 9 && (
            <Pagination
            color="standard"
            shape="circular"
            defaultPage={1}
            count={20}
            page={currentPage}
            onChange={paginate}
            size="small"
          />
          )}
        </div>
      </div>
    </div>
  )
}

export default Exercises;

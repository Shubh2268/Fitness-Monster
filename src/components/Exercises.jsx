import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

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
          {exercises.length > 6 && (
            <ReactPaginate
            breakLabel={
              <span className='mx-2'>...</span>
            }
            nextLabel={
              <span className='w-4 h-4 md:w-7 md:h-7 text-slate-700 bg-slate-300 flex items-center justify-center rounded-full'><FaChevronRight size={8} /></span>
            }
            onPageChange={paginate}
            pageRangeDisplayed={2}
            pageCount={100}
            previousLabel={
              <span className='w-4 h-4 md:w-7 md:h-7 text-slate-700 bg-slate-300 flex items-center justify-center rounded-full'><FaChevronLeft size={8} /></span>
            }
            containerClassName='flex items-center justify-center my-5'
            pageClassName='block border-slate-300 text-slate-600 hover:bg-slate-200 active:bg-slate-200 w-4 h-4 md:w-7 md:h-7 flex items-center text-xs md:text-base justify-center mx-1 rounded-full text-slate-600 font-medium'
            activeClassName='bg-slate-200'
            />
          )}
        </div>
      </div>
    </div>
  )
}

export default Exercises;

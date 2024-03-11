import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import { IoCaretBackCircleOutline, IoCaretForwardCircleOutline } from "react-icons/io5";

import ExerciseCard from '../components/ExerciseCard';
import Loader from '../components/Loader';
import { exerciseOptions, fetchData } from '../utils/fetchData';

const Exercises = ({ exercises, setExercises, bodyPart }) => {

  // const [currentPage, setCurrentPage] = useState(1);
  const [itemOffset, setItemOffset] = useState(0);
  const [exercisesPerPage] = useState(6);

  useEffect(() => {
    const fetchExercisesData = async () => {
      let exercisesData = [];

      if (bodyPart === 'all') {
        exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises?limit=200', exerciseOptions);
      } else {
        exercisesData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}?limit=200`, exerciseOptions);
      }

      setExercises(exercisesData);
    };

    fetchExercisesData();
  }, [bodyPart]);

  // // Pagination 
  const endOffset = itemOffset + exercisesPerPage;
  const currentExercises = exercises.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(exercises.length / exercisesPerPage);


  const handlePageClick = (event) => {
    const newOffset = (event.selected * exercisesPerPage) % exercises.length;

    setItemOffset(newOffset);
  };

  if (!currentExercises.length) {
    return <Loader />
  }

  return (
    <div id='exercises' className='my-16 md:my-24'>
      <div className='flex exercises-center justify-center my-5'>
        <h1 className='font-bold text-2xl md:text-4xl capitalize'>showing results</h1>
      </div>
      <div className='my-1'>
        <div className='flex flex-wrap exercises-center justify-center'>
          {currentExercises.map((exercise, id) => (
            <ExerciseCard key={id} exercise={exercise} />
          ))}
        </div>
        <div className='flex items-center justify-center mt-10 md:mt-0'>
          {exercises && (
            <ReactPaginate className='flex items-center justify-center'
              breakLabel="..."
              nextLabel= {<IoCaretForwardCircleOutline size={25} className='text-gray-700' />}
              onPageChange={handlePageClick}
              pageRangeDisplayed={5}
              pageCount={pageCount}
              previousLabel= {<IoCaretBackCircleOutline size={25} className='text-gray-700' />}
              renderOnZeroPageCount={null}
              pageClassName='text-sm font-medium py-2 px-4 mx-1 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 cursor-pointer'
            />
          )}
        </div>
      </div>
    </div>
  )
}

export default Exercises;

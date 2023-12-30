import React, { useEffect, useState } from 'react';
import HorizontalScrollbar from './HorizontalScrollbar';
import { exerciseOptions, fetchData } from '../utils/fetchData';

const SearchExercises = ({ setExercises, bodypart, setBodyPart }) => {

    const [search, setSearch] = useState('');
    const [bodyparts, setBodyParts] = useState([]);

    useEffect(() => {
        const fetchExercisesData = async () => {
            const bodyPartsData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exerciseOptions);

            setBodyParts(['all', ...bodyPartsData]);
        };

        fetchExercisesData();
    }, []);

    const handleSearch = async () => {
        if (search) {
            const exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions);
            const searchedExercises = exercisesData.filter((item) =>
                item.name.toLowercase().includes(search)
                || item.name.toLowercase().includes(search)
                || item.target.toLowercase().includes(search)
                || item.equipment.toLowercase().includes(search)
                || item.bodyPart.toLowercase().includes(search)
            );

            window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' })

            setSearch('');
            setExercises(searchedExercises);
        };
    };

    return (
        <div className='mt-16 pt-10 '>
            <div className='flex items-center justify-center'>
                <h1 className='font-bold text-4xl capitalize'>exercises you should know</h1>
            </div>
            <div className='flex items-center justify-center'>
                <input type="text" value={search} onChange={(e) => setSearch(e.target.value.toLowerCase())} placeholder='Search exercises by name, bodypart or equipment . . .' className='my-8 w-3/5 p-3 text-lg border-s-4 border-red-600 bg-slate-900 text-white capitalize placeholder:normal-case outline-none rounded-lg border-r-0 placeholder:text-gray-500' />
                <button className='px-7 py-3 border-none -ml-4 bg-red-600 hover:bg-red-500 text-white text-lg font-bold rounded-md italic tracking-wide' onClick={handleSearch}>Search</button>
            </div>
            <div>
                <HorizontalScrollbar />
            </div>
        </div>
    )
}

export default SearchExercises;

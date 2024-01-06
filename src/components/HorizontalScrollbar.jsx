import React from 'react';
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import ExerciseCard from './ExerciseCard';
import BodyPart from './BodyPart';

const HorizontalScrollbar = ({ data, bodyPart, setBodyPart, bodyParts }) => {

    const slideLeft = () => {
        let slider = document.getElementById('slider');
        slider.scrollLeft = slider.scrollLeft - 500;
    }

    const slideRight = () => {
        let slider = document.getElementById('slider');
        slider.scrollLeft = slider.scrollLeft + 500;
    }

    return (
        <div className='relative flex items-center my-10'>
            <FaChevronLeft onClick={slideLeft} size='30px' className='cursor-pointer opacity-100 hover:opacity-50 mx-2' />
            <div id="slider" className=' overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide'>
                {data.map((item) => (
                    <div key={item.id || item} title={item.id || item} className='inline-block my-5'>
                        {bodyParts ? <BodyPart item={item} setBodyPart={setBodyPart} bodyPart={bodyPart} /> : <ExerciseCard exercise={item} />}
                    </div>
                ))}
            </div>
            <FaChevronRight onClick={slideRight} size='30px' className='cursor-pointer opacity-100 hover:opacity-50 mx-2' />
        </div>
    )
}

export default HorizontalScrollbar;

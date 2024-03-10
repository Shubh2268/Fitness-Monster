import React from 'react';
import { IoArrowBackCircleOutline, IoArrowForwardCircleOutline } from 'react-icons/io5';
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
        <div className='my-10'>
            <div id='slider' className='overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide'>
                {data.map((item) => (
                    <div key={item.id || item} title={item.id || item} className='inline-block my-0 lg:my-5'>
                        {bodyParts ? <BodyPart item={item} setBodyPart={setBodyPart} bodyPart={bodyPart} /> : <ExerciseCard exercise={item} />}
                    </div>
                ))}
            </div>
            <div className='flex justify-end mx-6'>
                <IoArrowBackCircleOutline onClick={slideLeft} size={30} className='cursor-pointer opacity-100 hover:opacity-70 mx-1 text-red-600' />
                <IoArrowForwardCircleOutline onClick={slideRight} size={30} className='cursor-pointer opacity-100 hover:opacity-70 mx-1 text-red-600' />
            </div>

        </div>
    )
}

export default HorizontalScrollbar;

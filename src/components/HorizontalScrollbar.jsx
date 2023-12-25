import React from 'react';
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const HorizontalScrollbar = () => {

    const data = [
        {
            id: 1,
            img: 'https://jsm-gym.netlify.app/static/media/gym.6e701417c428e2fbc267.png',
            title: 'All'
        },
        {
            id: 2,
            img: 'https://jsm-gym.netlify.app/static/media/gym.6e701417c428e2fbc267.png',
            title: 'Back'
        },
        {
            id: 3,
            img: 'https://jsm-gym.netlify.app/static/media/gym.6e701417c428e2fbc267.png',
            title: 'Cardio'
        },
        {
            id: 4,
            img: 'https://jsm-gym.netlify.app/static/media/gym.6e701417c428e2fbc267.png',
            title: 'Chest'
        },
        {
            id: 5,
            img: 'https://jsm-gym.netlify.app/static/media/gym.6e701417c428e2fbc267.png',
            title: 'Shoulder'
        },
        {
            id: 6,
            img: 'https://jsm-gym.netlify.app/static/media/gym.6e701417c428e2fbc267.png',
            title: 'Lower Arms'
        },
        {
            id: 7,
            img: 'https://jsm-gym.netlify.app/static/media/gym.6e701417c428e2fbc267.png',
            title: 'Lower Legs'
        },
        {
            id: 8,
            img: 'https://jsm-gym.netlify.app/static/media/gym.6e701417c428e2fbc267.png',
            title: 'Neck'
        },
        {
            id: 9,
            img: 'https://jsm-gym.netlify.app/static/media/gym.6e701417c428e2fbc267.png',
            title: 'Upper Arms'
        },
        {
            id: 10,
            img: 'https://jsm-gym.netlify.app/static/media/gym.6e701417c428e2fbc267.png',
            title: 'Upper Legs'
        },
        {
            id: 11,
            img: 'https://jsm-gym.netlify.app/static/media/gym.6e701417c428e2fbc267.png',
            title: 'Waist'
        }
    ]

    const slideLeft = () => {
        let slider = document.getElementById('slider');
        slider.scrollLeft = slider.scrollLeft - 500;
    }

    const slideRight = () => {
        let slider = document.getElementById('slider');
        slider.scrollLeft = slider.scrollLeft + 500;
    }

    return (
        <div className='relative flex items-center my-20'>
            <FaChevronLeft onClick={slideLeft} size={20} className='cursor-pointer opacity-50 hover:opacity-100' />
            <div id="slider" className='w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide'>
                {data.map((item) => (
                    <div className='bg-slate-800 w-60 m-6 inline-block py-14 px-24 cursor-pointer hover:scale-110 ease-in duration-300 rounded-md'>
                        <img key={item.id} src={item.img} alt="category" className='w-20 ' />
                        <h4 className='text-center text-white mt-8 text-xl font-semibold flex items-center justify-center tracking-wide'>{item.title}</h4>
                    </div>
                ))}
            </div>
            <FaChevronRight onClick={slideRight} size={20} className='cursor-pointer opacity-50 hover:opacity-100' />
        </div>
    )
}

export default HorizontalScrollbar;

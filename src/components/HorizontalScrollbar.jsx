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
            title: 'All'
        },
        {
            id: 3,
            img: 'https://jsm-gym.netlify.app/static/media/gym.6e701417c428e2fbc267.png',
            title: 'All'
        },
        {
            id: 4,
            img: 'https://jsm-gym.netlify.app/static/media/gym.6e701417c428e2fbc267.png',
            title: 'All'
        },
        {
            id: 5,
            img: 'https://jsm-gym.netlify.app/static/media/gym.6e701417c428e2fbc267.png',
            title: 'All'
        },
        {
            id: 6,
            img: 'https://jsm-gym.netlify.app/static/media/gym.6e701417c428e2fbc267.png',
            title: 'All'
        },
        {
            id: 7,
            img: 'https://jsm-gym.netlify.app/static/media/gym.6e701417c428e2fbc267.png',
            title: 'All'
        },
        {
            id: 8,
            img: 'https://jsm-gym.netlify.app/static/media/gym.6e701417c428e2fbc267.png',
            title: 'All'
        },
        {
            id: 9,
            img: 'https://jsm-gym.netlify.app/static/media/gym.6e701417c428e2fbc267.png',
            title: 'All'
        },
        {
            id: 10,
            img: 'https://jsm-gym.netlify.app/static/media/gym.6e701417c428e2fbc267.png',
            title: 'All'
        },
        {
            id: 11,
            img: 'https://jsm-gym.netlify.app/static/media/gym.6e701417c428e2fbc267.png',
            title: 'All'
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
                    <img key={item.id} src={item.img} alt="category" className='w-60 bg-slate-900 m-6 inline-block py-16 px-20 cursor-pointer hover:scale-110 ease-in duration-300' />
                    
                ))}
            </div>
            <FaChevronRight onClick={slideRight} size={20} className='cursor-pointer opacity-50 hover:opacity-100' />
        </div>
    )
}

export default HorizontalScrollbar;

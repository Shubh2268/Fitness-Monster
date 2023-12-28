import React from 'react';
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const HorizontalScrollbar = () => {

    const data = [
        {
            id: 1,
            img: 'https://imagetolink.com/ib/vR59a6gaJR.jpg',
            title: 'All'
        },
        {
            id: 2,
            img: 'https://imagetolink.com/ib/EXPepNlOHV.jpg',
            title: 'Back'
        },
        {
            id: 3,
            img: 'https://imagetolink.com/ib/OFY4HNnnUa.jpg',
            title: 'Cardio'
        },
        {
            id: 4,
            img: 'https://imagetolink.com/ib/uPTwHqdcwN.jpg',
            title: 'Chest'
        },
        {
            id: 5,
            img: 'https://imagetolink.com/ib/a6bcMBlMjH.jpg',
            title: 'Shoulder'
        },
        {
            id: 6,
            img: 'https://imagetolink.com/ib/soN3q7dgia.jpg',
            title: 'Lower Arms'
        },
        {
            id: 7,
            img: 'https://imagetolink.com/ib/EDgjQVdMBq.jpg',
            title: 'Lower Legs'
        },
        {
            id: 8,
            img: 'https://imagetolink.com/ib/6cwOJfrF3x.jpg',
            title: 'Neck'
        },
        {
            id: 9,
            img: 'https://imagetolink.com/ib/jDFfwLHEWV.jpg',
            title: 'Upper Arms'
        },
        {
            id: 10,
            img: 'https://imagetolink.com/ib/ChMRJNfNKl.jpg',
            title: 'Upper Legs'
        },
        {
            id: 11,
            img: 'https://imagetolink.com/ib/3PdqR3icwj.jpg',
            title: 'Waist'
        }
    ];

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
                    <div key={item.id} className='bg-slate-900 w-72 m-4 inline-block cursor-pointer hover:scale-110 ease-in duration-500 rounded-md'>
                        <img src={item.img} alt="category" className='w-72 h-52 rounded-t-md' />
                        <h4 className='text-center text-white my-4 text-xl font-semibold flex items-center justify-center tracking-wide'>{item.title}</h4>
                    </div>
                ))}
            </div>
            <FaChevronRight onClick={slideRight} size={20} className='cursor-pointer opacity-50 hover:opacity-100' />
        </div>
    )
}

export default HorizontalScrollbar;

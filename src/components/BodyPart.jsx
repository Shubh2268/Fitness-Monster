import React from 'react';
import fig from '../assets/logo.webp';

const BodyPart = ({ item, bodyPart, setBodyPart }) => {

    const categoryData = [
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

    return (
        <div className='flex items-center justify-center'>
            <button type='button'
                onClick={() => {
                    setBodyPart(item);
                    window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' });
                }}>
                <div className='bg-slate-900 m-4 hover:scale-105 ease-in duration-500 rounded-md'>
                    <img src="https://imagetolink.com/ib/vR59a6gaJR.jpg" alt="category" className='w-72 h-52 rounded-t-md' />
                    <h4 className='flex items-center justify-center text-white p-4 text-xl font-semibold tracking-wide capitalize'>{item}</h4>
                </div>
            </button>
        </div>
    )
}

export default BodyPart;

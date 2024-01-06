import React from 'react';
import bodypartImage from '../assets/bodypart.png'
import targetImage from '../assets/target.png'
import equipmentImage from '../assets/equipment.png'

const Detail = ({ exerciseDetail }) => {

    const { bodyPart, gifUrl, name, target, equipment } = exerciseDetail;

    const extraDetail = [
        {
            id: 1,
            icon: bodypartImage,
            name: bodyPart
        },
        {
            id: 2,
            icon: targetImage,
            name: target
        },
        {
            id: 3,
            icon: equipmentImage,
            name: equipment
        },
    ];

    return (
        <div className='flex items-center text-slate-900'>
            <img src={gifUrl} alt={name} className='w-[300px] md:w-[730px] h-[300px] md:h-[740px]' />
            <div className='px-10 py-24'>
                <h3 className='text-3xl md:text-6xl font-bold capitalize mt-14'>{name}</h3>
                <p className='py-5 text-xl text-slate-800 italic'>Exercises keep you strong.{' '} <span className='capitalize text-red-600 font-medium'>{name}</span> bup is one
                    of the best <br /> exercise to target your <span className='capitalize text-red-600 font-medium'>{target}</span>. It will help you improve your{' '}
                    <br /> mood and gain energy.
                </p>
                {extraDetail.map((item) => (
                    <div key={item.id} className='flex items-center my-6 mx-1'>
                        <img src={item.icon} alt={bodyPart} className='w-16 bg-slate-300 p-3 rounded-full mx-3 my-2' />
                        <p className='text-xl text-slate-800 capitalize m-2 font-medium'>{item.name}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Detail;

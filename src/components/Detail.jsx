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
        <div className='grid md:grid-cols-2 text-slate-900'>
            
            <img src={gifUrl} alt={name} className='w-full px-5 md:w-11/12 h-5/6 md:h-full' />

            <div className='px-10 lg:py-20'>
                <h3 className='text-2xl sm:text-4xl lg:text-5xl font-bold capitalize md:mt-14'>{name}</h3>
                <p className='py-5 sm:text-lg lg:text-xl text-slate-800 italic'>Exercises keep you strong.{' '} <span className='capitalize text-red-600 font-medium'>{name}</span> bup is one
                    of the best <br /> exercise to target your <span className='capitalize text-red-600 font-medium'>{target}</span>. It will help you improve your{' '}
                    <br /> mood and gain energy.
                </p>
                {extraDetail.map((item) => (
                    <div key={item.id} className='flex items-center my-6'>
                        <img src={item.icon} alt={bodyPart} className='w-16 bg-slate-300 p-3 rounded-full md:mx-3 my-2' />
                        <p className='text-xl text-slate-800 capitalize m-2 font-medium'>{item.name}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Detail;

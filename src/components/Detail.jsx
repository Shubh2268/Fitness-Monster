import React from 'react';

const Detail = ({ exerciseDetail }) => {

    const { bodyPart, gifUrl, name, target, equipment, instructions } = exerciseDetail;

    return (

        
        
        <div className='flex items-center px-5 bg-slate-900 text-white'>
            <img src={gifUrl} alt={name} className='w-[300px] md:w-[730px] h-[300px] md:h-[740px]' />
            <div className='p-10'>
                <h3 className='text-3xl md:text-6xl font-bold capitalize'>{name}</h3>
                <p className='py-5 text-xl text-slate-200 italic'>Exercises keep you strong.{' '} <span className='capitalize text-red-600 font-medium'>{name}</span> bup is one
                    of the best <br /> exercises to target your <span className='capitalize text-red-600 font-medium'>{target}</span>. It will help you improve your{' '}
                    <br /> mood and gain energy.
                </p>
                <ol>
                    {exerciseDetail.instructions.map((items) => (
                        <li key={items.id}>{items}</li>
                    ))}
                </ol>
            </div>
        </div>
    )
}

export default Detail;

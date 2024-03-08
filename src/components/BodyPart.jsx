import React from 'react';

const BodyPart = ({ item, bodyPart, setBodyPart }) => {

    return (
        <div className='flex items-center justify-center'>
            <button type='button'
                onClick={() => {
                    setBodyPart(item);
                    window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' });
                }}>
                <div className='bg-slate-900 m-2 w-44 hover:scale-105 ease-in duration-500 rounded-xl'>
                    <h4 className='flex items-center justify-center text-white p-2 md:p-3 text-sm md:text-lg tracking-wide capitalize'>{item}</h4>
                </div>
            </button>
        </div>
    )
}

export default BodyPart;

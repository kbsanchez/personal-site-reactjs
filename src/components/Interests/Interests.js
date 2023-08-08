import React, { useState } from 'react'

export default function Interests() {
    const [index, setIndex] = useState(0); 
    const length = 6;

    const handlePrevious = () => {
        const newIndex = index - 1;
        setIndex(newIndex < 0 ? length - 1 : newIndex);
    };

    const handleNext = () => {
        const newIndex = index + 1;
        setIndex(newIndex >= length ? 0 : newIndex);
    };

    return (
        <div className='flex flex-col justify-between items-center min-h-[500px] pt-10 h-screen bg-red-bean bg-opacity-95'>
            <div className='interests-container mt-10'>
                <div className="carousel mx-8 bg-pale-pink">
                    <div className='flex justify-center'>
                        <p>{index}</p>
                    </div>
                    <div className=''>
                        <button onClick={handlePrevious} className='bg-white mr-2 px-6'>
                            Back
                        </button>
                        <button onClick={handleNext} className='bg-white ml-2 px-6'>
                            Next
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

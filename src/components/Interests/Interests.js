import React, { useState } from 'react'
import Guitar from '../../assets/Interests/Guitar.png'
import Gardening from '../../assets/Interests/Gardening.png'
import Hiking from '../../assets/Interests/Hiking.png'
import Sushi from '../../assets/Interests/Sushi.png'


export default function Interests() {
    const [index, setIndex] = useState(0); 
    const length = 4;

    const InterestsData = [
        {
            title: "The Outdoors",
            image: Hiking,
            desc: "Venturing into the great outdoors is my way of finding balance. Whether it's hiking, hammocking, or simply relishing in the beauty of a sunset, nature is where I rejuvenate my spirit.",
        },
        {
            title: "Music",
            image: Guitar,
            desc: "Each culture's music tells a unique story. I immerse myself in the rhythms of different traditions, appreciating the rich narratives that instruments and voices weave.",
        },
        {
            title: "Sushi",
            image: Sushi,
            desc: "Sushi isn't just a dish; it's a shared experience. From sushi nights with friends to visiting local Japanese restaurants, I find joy in connecting with fellow sushi enthusiasts and discovering new hidden gems.",
        },
        {
            title: "Gardening",
            image: Gardening,
            desc: "Gardening is my meditation, nurturing life from tiny seeds into blooming wonders, mirroring the patience and care I bring to code.",
        },
      ];

    const handlePrevious = () => {
        const newIndex = index - 1;
        setIndex(newIndex < 0 ? length - 1 : newIndex);
        console.log(index);
    };

    const handleNext = () => {
        const newIndex = index + 1;
        setIndex(newIndex >= length ? 0 : newIndex);
        console.log(index);
    };

    return (
        <div className='flex flex-col justify-between items-center min-h-[500px] pt-10 h-screen bg-red-bean bg-opacity-95'>
            <div className='interests-container mt-10'>
                <h1 className='text-center text-white text-xl font-bold my-2'><i>Beyond The Code</i></h1>
                <span className='flex justify-center text-center text-white text-md font-medium mt-2 mx-12'>
                Welcome to the vibrant mosaic of my interests<br/>that exist beyond the realm of programming.
                </span>
                <div className="carousel w-96 sm:w-[36rem] md:w-[42rem] lg:w-[56rem] mt-6 mx-8 bg-pale-pink">
                    <div className='flex justify-center mx-4 relative gap-1 overflow-hidden scroll-smooth mb-6'>
                        <div className='relative'>
                            <div className='image-container border-4 border-raw-umber w-[22rem] sm:w-[34rem] md:w-[40rem] lg:w-[54rem] h-[363px] mt-2'>
                                <img src={InterestsData[index].image} alt={InterestsData[index].title} className=' max-w-full mx-auto h-[355px]'/>
                            </div>

                            <h1 className='text-lg font-bold text-center mt-6'>
                                {InterestsData[index].title}
                            </h1>
                            <span className='text-md font-medium'>
                                {InterestsData[index].desc}
                            </span>
                        </div>
                    </div>
                    <div className='flow-root'>
                        <button onClick={handlePrevious} className='bg-red-bean bg-opacity-95 mr-2 px-6 text-white border-2 rounded float-left'>
                            Back
                        </button>
                        <button onClick={handleNext} className='bg-red-bean bg-opacity-95 ml-2 px-6 text-white border-2 rounded float-right'>
                            Next
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

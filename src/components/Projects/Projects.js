import React from 'react'
import './Projects.css'

export default function Projects() {
    return (
        <div className='flex flex-col justify-between items-center min-h-[500px] pt-10 h-screen bg-red-bean bg-opacity-95'>
            <div className='projects-container'>
                <div className='coming-soon w-80 h-14 bg-white my-24 rounded-3xl text-center py-2 border-raw-umber border-4'>
                    <span className='text-red-bean font-serif font-bold text-3xl'>
                        {" "}
                        Under Construction
                    </span>
                </div>

                <div className='cat-pic'>
                    <div className='cat-pic-background' />
                </div>

                <div className='coming-soon w-80 h-14 my-10 text-center py-2'>
                    <span className='text-white font-sans font-bold text-xl'>
                        {" "}
                        Thanks for your patience
                    </span>
                </div>
            </div>
        </div>
    )
}

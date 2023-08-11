import React from 'react'
import { ProjectData } from './ProjectData'

export default function Projects() {
    return (
        <div className='flex flex-col justify-between items-center min-h-[500px] pt-10 h-screen bg-red-bean bg-opacity-95 overflow-y-scroll'>
            <div className='projects-container mt-10 mx-8 mb-6'>
                <div className="grid gap-2 lg:grid-cols-4 md:grid-cols-2">
                    {ProjectData.map((items, key) => (
                        <div className="w-full rounded-lg shadow-md lg:max-w-sm bg-white" key={key}>
                            <div className="p-4">
                                <p className='text-md font-medium text-onyx text-right'>
                                    {items.date}
                                </p>
                                <h4 className="text-xl font-semibold text-black-600">
                                    
                                    {items.title}
                                </h4>
                                <p className="mb-2 mt-2 leading-normal">
                                {items.desc}
                                </p>
                                <div className='my-4 flex flex-nowrap justify-center'>
                                    <a href={items.repo} target='_blank' rel='noreferrer noopener'>
                                        <button className="px-8 py-2 mr-2 text-sm text-white bg-onyx bg-opacity-70 hover:bg-opacity-100 rounded shadow">
                                            Repo
                                        </button>
                                    </a>
                                    <a href={items.demo} target='_blank' rel='noreferrer noopener'>
                                        <button className="px-8 py-2 ml-2 text-sm text-white bg-red-bean bg-opacity-70 hover:bg-opacity-100 rounded shadow">
                                            Demo
                                        </button>
                                    </a>
                                </div>
                                {items.tag.map((tags) => (
                                    <div className='inline-flex flex-wrap'>
                                        <button className='text-xs text-onyx bg-pale-pink rounded-2xl px-2 py-[2px] shadow'>
                                            {tags}
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

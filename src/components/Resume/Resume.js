import React from 'react'
import ResumeContent from './ResumeContent'

export default function Resume() {

    return (
        <div className='flex flex-col justify-between min-h-[1000px] pt-10 h-screen bg-red-bean bg-opacity-95'>
            <div className='resume-container mx-10 mt-[50px]'>
                <div className='resume-parent'>
                    <ResumeContent />
                </div>
            </div>
        </div>
    )
}

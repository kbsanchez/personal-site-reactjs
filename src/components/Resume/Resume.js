import React from 'react'
import ResumeContent from './ResumeContent'

export default function Resume() {

    return (
        <div className='flex flex-col justify-between pt-10 h-screen bg-red-bean bg-opacity-95'>
            <div className='resume-container mx-10 mt-[50px] mb-6'>
                <div className='resume-parent min-h-full overflow-y-scroll'>
                    <ResumeContent />
                </div>
            </div>
        </div>
    )
}

import React from 'react'

export default function Resume() {
    return (
        <div className='flex flex-col justify-between min-h-[1000px] pt-10 h-screen bg-red-bean bg-opacity-95'>
            <div className='resume-container mx-10 mt-[50px]'>
                <div className='resume-parent'>
                    <div className='resume-header text-center mb-10'>
                        <span className='primary-text text-white font-semibold font-serif text-3xl'>
                            {" "}
                            Resume
                        </span>
                    </div>
                    <div className='resume-details h-[800px]'>
                        <object className='resume-pdf' data="KeylinSanchez-2023Resume.pdf" type="application/pdf" width="100%" height="100%">
                            <p>Alternate text</p>
                        </object>
                    </div>
                </div>
            </div>
        </div>
    )
}

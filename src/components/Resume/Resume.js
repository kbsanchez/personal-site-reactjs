import React from 'react'

export default function Resume() {
    return (
        <div className='flex flex-col justify-between min-h-[1000px] pt-10 h-screen bg-red-bean bg-opacity-95'>
            <div className='resume-container mx-10 mt-[50px]'>
                <div className='resume-parent mt-[100px]'>
                    <div className='resume-header text-center mb-10'>
                        <span className='primary-text text-white font-semibold font-serif text-3xl'>
                            {" "}
                            Resume page<br/>
                            (under construction)
                        </span>
                    </div>
                    <div className='resume-details text-center'>
                        <a href='KeylinSanchez-2023Resume.pdf' download='KeylinSanchez-Resume.pdf'>
                            <button className='btn highlighted-btn ml-[28px]'>Get Resume</button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

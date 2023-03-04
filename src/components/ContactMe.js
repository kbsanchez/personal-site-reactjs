import React from 'react'
import Typed from 'react-typed'

export default function ContactMe() {
    return (
        <div className='flex flex-col justify-between min-h-[500px] pt-10 h-screen bg-red-bean bg-opacity-95'>
            <header className='contactme-container flex items-center text-center justify-center h-[10%] pb-[50px] min-h-fit'>
                <div className='contact-page-title text-pale-pink text-3xl mt-[130px] min-w-full min-h-[50px] bg-pale-pink py-4 bg-opacity-5'>
                    <span className='font-serif font-bold'>
                        {" "}
                        <Typed 
                        strings={[
                            "Let's start a conversation",
                            "Let's start on a project together",
                            "Let's start by connecting:"
                        ]}
                        typeSpeed={50}
                        backSpeed={50}
                        backDelay={50}
                        smartBackspace
                        />
                    </span>
                </div>

                <div className='contact-details flex text-center items-center justify-center h-[10%] pb-[50px] min-h-fit mt-[500px]'>
                    
                </div>
            </header>
        </div>
    )
}

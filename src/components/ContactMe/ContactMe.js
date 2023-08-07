import React from 'react'
import Typed from 'react-typed'
import './ContactMe.css'

export default function ContactMe() {
    return (
        <div className='flex flex-col justify-between h-screen bg-red-bean bg-opacity-95'>
            <header className='contactme-container flex flex-col items-center text-center justify-center h-[10%] pb-[50px] min-h-fit'>
                <div className='contact-page-title text-pale-pink text-3xl mt-[250px] min-w-full min-h-[50px] bg-pale-pink py-2 bg-opacity-5'>
                    <span className='font-serif font-bold'>
                        {" "}
                        <Typed 
                        strings={[
                            "Let's start a conversation",
                            "Let's start on a project",
                            "Let's start by connecting:"
                        ]}
                        typeSpeed={50}
                        backSpeed={50}
                        backDelay={50}
                        smartBackspace
                        />
                    </span>
                </div>

                <div className='contact-details flex flex-col text-center items-center justify-between h-[10%] pb-[50px] min-h-fit'>
                    <div className='contact-info pb-3 pt-0 border-solid border-y-2 border-pale-pink px-4'>
                        <span className='primary-text font-serif'>
                            {" "}
                            <h1 className='text-pale-pink text-[30px] font-semibold'>
                                Contact Info
                            </h1>

                            <h2 className='text-pale-pink text-[20px] text-left pt-2'>
                                Email:&emsp; <a href='https://linkedin.com/in/keylin-sanchez/'>Request through <strong>LinkedIn</strong></a><br/>
                                City:&emsp;&emsp;Tampa, FL
                            </h2>
                        </span>
                    </div>
                    <div className='contact-message-container p-8 pt-0 justify-start'>
                        <div className='contact-form-container pt-5'>
                        
                        </div>
                        
                    </div>
                </div>
            </header>
        </div>
    )
}

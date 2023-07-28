import React from 'react'
import './Home.css'
import { FaLinkedin, FaGithubSquare } from "react-icons/fa";
import Typed from "react-typed";

export default function Home() {
    return (
        <div className='flex flex-col justify-between min-h-[722px] pt-10 h-screen bg-red-bean bg-opacity-95'>
            <header className='profile-container flex items-center text-center justify-center h-[10%] pb-[50px] min-h-fit'>
                <div className="hero flex text-center items-center justify-center h-[10%] pb-[50px] min-h-fit mt-[500px]">
                    <div className='profile-details'>
                        <div className="colz p-[8px]">
                            <div className='colz-icon inline-flex'>
                                <a href='https://www.linkedin.com/in/keylin-sanchez/' className='pr-[2px]'>
                                    <FaLinkedin className="text-pale-pink hover:scale-125 transition duration-500"/>
                                </a>
                                <a href='https://github.com/kbsanchez' className='pl-[2px]'>
                                    <FaGithubSquare className="text-pale-pink hover:scale-125 transition duration-500"/>
                                </a>
                            </div>
                        </div>

                        <div className="profile-details-name md:text-2xl sm:text-xl">
                            <span className="text-pale-pink font-serif">
                                {" "}
                                Hello, I'm <span className="text-white">Keylin Sanchez</span>
                            </span>
                        </div>

                        <div className='profile-details-role'>
                            <span className='primary-text font-serif'>
                                {" "}
                                <h1 className="text-white text-[40px]">
                                    <Typed
                                    strings={[
                                        "Software Engineer",
                                        "Developer",
                                        "CS Graduate",
                                        "Problem Solver"
                                    ]}
                                    typeSpeed={100}
                                    backSpeed={50}
                                    loop
                                    />
                                </h1>
                                <span className="profile-role-tagline text-pale-pink text-xl mt-[5px]">
                                    I simplify your life through technology.
                                </span>
                            </span>
                        </div>

                        <div className='profile-options my-2'>
                            <a href='/contact'>
                                <button className='btn primary-btn'>
                                    Contact Me
                                </button>
                            </a>
                            <a href='/resume'>
                                <button className='btn highlighted-btn ml-[28px]'>Get Resume</button>
                            </a>
                        </div>
                    </div>

                    <div className='profile-picture'>
                        <div className='profile-picture-background'></div>
                    </div>
                </div>
            </header>
        </div>
    )
}

import React, { useState } from 'react'
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai"

const NavBar = () => {
    const [toggle, setToggle] = useState(false);
    const handleToggle = () => setToggle(!toggle);

    return (
        <div>
            <header className="flex justify-between px-4 py-3 bg-red-bean text-pale-pink text-lg fixed w-full z-10">
                <a href="/">
                    <img className="w-9" src={require('../assets/logo.png')} alt="KS"/>
                </a>

                <nav className="hidden md:block">
                    <ul className="flex">
                        <li className="mx-5">
                            <a href="/resume">Resume</a>
                        </li>
                        <li className="mx-5">
                            <a href="/projects">Projects</a>
                        </li>
                        <li className="mx-5">
                            <a href="/interests">Interests</a>
                        </li>
                        <li className="mx-5">
                            <a href="/contact">Contact</a>
                        </li>
                    </ul>
                </nav>
                
                {/* Mobile View */}
                <nav
                    className={!toggle ? "block md:hidden fixed top-16 py-2 w-full h-full bg-red-bean duration-500 left-[-100%]" 
                    : "block md:hidden fixed top-16 py-3 w-full h-full bg-red-bean duration-500 left-0"}
                >
                    <ul className="flex flex-col">
                        <li>
                            <a href="/resume">Resume</a>
                        </li>
                        <li>
                            <a href="/projects">Projects</a>
                        </li>
                        <li>
                            <a href="/interests">Interests</a>
                        </li>
                        <li>
                            <a href="/contact">Contact</a>
                        </li>
                    </ul>
                </nav>

                <button onClick={handleToggle} className="block md:hidden">
                    {!toggle ? <AiOutlineMenu size={30} /> : <AiOutlineClose size={30} />}
                </button>
            </header>
        </div>
    )
};

export default NavBar;
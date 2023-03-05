import React, { useState, useEffect } from 'react'

export default function Interests() {
    const [joke, setJoke] = useState("...loading next joke");

    const generateJoke = async () => {
        const config = {
        headers: {
            accept: "application/json"
        }
        };
        const res = await fetch("https://icanhazdadjoke.com/", config);
        const data = await res.json();
        setJoke(data.joke);
    };

    useEffect(() => {
        generateJoke();
    }, []);

    return (
        <div className='flex flex-col justify-between items-center min-h-[500px] pt-10 h-screen bg-red-bean bg-opacity-95'>
            <div className='interests-container'>
                <div className='coming-soon w-80 h-14 mx-14 bg-white rounded-3xl mt-24 text-center py-2 border-raw-umber border-4'>
                    <span className='text-red-bean font-serif font-bold text-3xl'>
                        {" "}
                        Under Construction
                    </span>
                </div>

                <div className="joke-container mt-14 bg-pale-pink text-center mx-3 w-[400px] border-2 border-none rounded-md">
                    <h3 className='font-bold py-4 text-xl'>Here's a joke while you wait:</h3>
                    <div id="joke" className="joke px-2 text-lg font-serif font-medium">
                    {joke}
                    </div>
                    <button id="jokeBtn" className="btn primary-btn my-4" onClick={generateJoke}>
                    Get Another Joke
                    </button>
                </div>
            </div>
        </div>
    )
}

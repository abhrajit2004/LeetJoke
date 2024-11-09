"use client";
import React, { useState } from 'react'

const GenerateJoke = () => {

    // const [type, setType] = useState('Programming');

    const [joke, setJoke] = useState('');

    const [joketype, setJokeType] = useState('');

    const generateJoke = () => {

        // const raw = "";

        const requestOptions = {
            method: "GET",
            // body: raw,
            redirect: "follow"
        };

        fetch("https://official-joke-api.appspot.com/random_joke", requestOptions)
            .then((response) => response.json())
            .then((result) => {

                setJoke(result.setup + ' ' + result.punchline)
                setJokeType(result.type)
            })
            .catch((error) => console.error(error));
    }


    return (
        <div className='bg-orange-200 min-h-[91vh] flex flex-col items-center gap-5'>
            <h1 className='text-3xl font-bold mt-10'>Generate Jokes Here</h1>
            {/* <select onChange={(e) => setType(e.target.value)} value={type}>
                <option>Programming</option>
                <option>Miscellaneous</option>
                <option>Spooky</option>
                <option>Priest</option>
                <option>Pun</option>
            </select> */}
            <button onClick={generateJoke} className='bg-orange-400 px-4 py-2 rounded-md'>Generate</button>
            {joke &&
                <>
                    <h2 className='text-2xl font-semibold'>Joke</h2>
                    <code className="joke bg-gray-200 mx-20 p-4 flex flex-col gap-4">
                        <span>{joke}</span>
                        <span className='flex justify-center items-center rounded-lg bg-gray-500 min-w-[5px] px-7 text-white'>{joketype}</span>
                    </code>
                </>
            }
        </div>
    )
}

export default GenerateJoke

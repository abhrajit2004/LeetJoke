"use client";
import Loader from '@/components/Loader';
import React, { useState } from 'react'

export default function GenerateJoke() {

    // const [type, setType] = useState('Programming');

    const [joke, setJoke] = useState('');

    const [type, setType] = useState('Select option');

    const generateJoke = () => {

        // const raw = "";

        const requestOptions = {
            method: "GET",
            // body: raw,
            redirect: "follow"
        };


         fetch(`https://api.chucknorris.io/jokes/random?category=${type}`, requestOptions, { next: { revalidate: 3600 } })
            .then((response) => response.json())
            .then((result) => setJoke(result.value))
            .catch((error) => console.error(error));
    }


    return (
        <div className='bg-orange-200 min-h-[91vh] flex flex-col items-center gap-5'>
            <h1 className='text-3xl font-bold mt-10'>Generate Jokes Here</h1>
            <select onChange={(e) => setType(e.target.value)} value={type}>
                <option disabled>Select option</option>
                <option>animal</option>
                <option>career</option>
                <option>celebrity</option>
                <option>dev</option>
                <option>movie</option>
                <option>science</option>
            </select>
            <button onClick={generateJoke} className='bg-orange-400 px-4 py-2 rounded-md'>Generate</button>
            {joke &&
                <>
                    <h2 className='text-2xl font-semibold'>Joke</h2>
                    <code className="joke bg-gray-200 mx-20 p-4 flex flex-col gap-4">
                        <span>{joke}</span>
                    </code>
                </>
            }
        </div>
    )
}

export const dynamic = 'force-dynamic'
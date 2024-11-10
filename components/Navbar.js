import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className='bg-orange-600 p-3 text-white flex justify-between items-center'>
      <Link href={"/"}>
        <div className="logo flex justify-center items-center gap-2">
          <img src="/laugh.png" width={40} height={40} alt="" />
          <h1 className='text-2xl font-bold'>LeetJoke</h1>
        </div>
      </Link>
      <ul className='flex justify-end items-center gap-4'>
        <li><Link href={"/"}>Home</Link></li>
        <li><Link href={"/generate"}>Joke Generator</Link></li>
        <li><Link href={"/"}>About</Link></li>
        <li><Link href={"/"}>Contact Us</Link></li>
        <li>
          <button className='bg-orange-400 px-4 py-2 rounded-md'>
            Login/Signup
          </button>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar

import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <nav className=' text-white font-semibold p-2 flex justify-between align-middle'>
        <Link href={"/"} className="font-sans text-2xl">
            SABRA
        </Link>
    <ul className='text-lg flex gap-5 '>
    <li className='transition ease-in-out duration-75 delay-75 hover:text-blue-700 cursor-pointer p-2'>
     About Us
    </li>
    <li className='transition ease-in-out duration-75 delay-75 hover:text-blue-700 cursor-pointer p-2'>
      <a href="#projects"> Projects</a>
   
    </li>
    <li className='transition ease-in-out duration-75 delay-75 hover:text-blue-700 cursor-pointer p-2 capitalize'>
    Reach out now!
    </li>
    </ul>
    </nav>
  )
}

export default Navbar
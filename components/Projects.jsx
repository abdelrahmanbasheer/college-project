import Link from 'next/link'
import React from 'react'

const Projects = () => {
  return (
    <div className='mt-4' id='projects'>
        <h1 className='text-center text-white font-bold text-3xl'>Our Projects</h1>
        <ul className='flex justify-center mt-24 gap-7 flex-wrap'>
          <li>
            <img src='./netflix.png' className='w-[800px] h-[400px]'/>
            <h1 className='text-white text-center text-2xl font-bold mt-3'>NetFlix Clone</h1>
            <p className='text-center text-white text-xl mt-3'>this is a description for the project</p>
          </li>
          <li>
            <img src='./spotify.png' className='w-[800px] h-[400px]'/>
            <h1 className='text-white text-center text-2xl font-bold mt-3'>Spotify Clone</h1>
            <p className='text-center text-white text-xl mt-3'>this is a description for the project</p>
          </li>
          <li>
            <Link href={"/projects/1"}>
            <img src='./pm.jpg' className='w-[800px] h-[400px]'/>
            </Link>
            <h1 className='text-white text-center text-2xl font-bold mt-3'>Project Management</h1>
            <p className='text-center text-white text-xl mt-3'>this is a description for the project</p>
            
          </li>
        </ul>
    </div>
  )
}

export default Projects
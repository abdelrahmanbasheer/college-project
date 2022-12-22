import React from 'react'
import { info } from '../utils/info'
const About = () => {
  return (
    <section className='mt-[400px]  h-[100vh]'>
        <h1 className='text-3xl text-center text-white font-bold font-sans capitalize'>Who are we</h1>
   
    <ul className='flex justify-center mt-10 '>
    {
        info.map((inf)=>
      
        <li className='p-4 w-72 '>
                <img src={inf.image} className="w-60 h-60 rounded-xl "></img>
            <h1 className='text-white font-semibold text-center mt-3'>{inf.name}</h1>
            <h6 className='text-white font-semibold text-center mt-3'>{inf.title}</h6>
            <p className='text-white text-center mt-3 '>{inf.description}</p>
            </li>
            
      
        )
    }
    </ul>
    
    </section>
  )
}

export default About
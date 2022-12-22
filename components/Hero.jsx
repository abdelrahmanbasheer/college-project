import React from 'react'
import Navbar from '../components/Navbar'
import About from './About'

const Hero = () => {
  return (
    <div>
        <Navbar></Navbar>
    <h1 className='text-white font-bold text-3xl text-center mt-[300px]'>SABRA DEVELOPMENTS</h1>
    <h1 className='text-white font-bold text-2xl text-center mt-2 capitalize'>innovating technology solutions since 2015</h1>
    <About></About>
   
    </div>
  )
}

export default Hero
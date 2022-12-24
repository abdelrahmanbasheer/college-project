import Head from 'next/head'
import React from 'react'
import Navbar from '../../../components/Navbar'

const stake = () => {
  return (
<div className='bg-black bg-hero h-full bg-repeat-y'>
      <Head>
        <title>Stakeholder Analysis</title>
      </Head>
      <Navbar></Navbar>
      <h1 className='text-white text-3xl text-center font-bold mt-10'>Project Management Project</h1>
      <h1 className='text-white text-2xl text-center font-bold mt-10'>Stakeholder Analysis</h1>
      <img src={"/stake.png"} alt="" className='block ml-auto mr-auto w-[50%] mt-12'/>
    </div>
  )
}

export default stake
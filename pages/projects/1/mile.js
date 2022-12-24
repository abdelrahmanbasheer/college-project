import Head from 'next/head'
import React from 'react'
import Navbar from '../../../components/Navbar'

const mile= () => {
  return (
    <div className='bg-black bg-hero h-full 3xl:h-[100vh] bg-repeat-y'>
    <Head>
      <title>Milestone Report</title>
    </Head>
    <Navbar></Navbar>
    <h1 className='text-white text-3xl text-center font-bold mt-10'>Project Management Project</h1>
    <h1 className='text-white text-2xl text-center font-bold mt-10'>Milestone Report</h1>
    <img src={"/meeting2.png"} alt=""  className='block ml-auto mr-auto w-[70%] h-[30%] mt-12 rounded-lg'/>
  </div>
  )
}

export default mile
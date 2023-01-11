import Head from 'next/head'
import React from 'react'
import Navbar from '../../../components/Navbar'
const monthlyprog = () => {
  return (
    <div className='bg-black bg-hero h-full 3xl:h-[100vh] bg-repeat-y'>
    <Head>
      <title>monthlyprog</title>
    </Head>
    <Navbar></Navbar>
    <h1 className='text-white text-3xl text-center font-bold mt-10'>Project Management Project</h1>
    <h1 className='text-white text-2xl text-center font-bold mt-10'>monthly prog</h1>
    <img src={"/monthlyprog.png"} alt=""  className='block ml-auto mr-auto w-[40%] mt-12 rounded-lg'/>
  </div>
  )
}

export default monthlyprog
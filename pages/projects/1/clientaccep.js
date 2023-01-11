import Head from 'next/head'
import React from 'react'
import Navbar from '../../../components/Navbar'

const clientaccep = () => {
  return (
    <div className='bg-black bg-hero h-full 3xl:h-[100vh] bg-repeat-y'>
    <Head>
      <title>Client Aceeptance</title>
    </Head>
    <Navbar></Navbar>
    <h1 className='text-white text-3xl text-center font-bold mt-10'>Project Management Project</h1>
    <h1 className='text-white text-2xl text-center font-bold mt-10'>Client Aceeptance</h1>
    <img src={"/clientacce.png"} alt=""  className='block ml-auto mr-auto w-[40%] mt-12 rounded-lg'/>
  </div>
  )
}

export default clientaccep
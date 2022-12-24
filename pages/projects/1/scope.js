import Head from 'next/head'
import React from 'react'
import Navbar from '../../../components/Navbar'

const scope = () => {
  return (
    <div className='bg-black bg-hero h-full bg-repeat-y'>
      <Head>
        <title>Scope Statement</title>
      </Head>
      <Navbar></Navbar>
      <h1 className='text-white text-3xl text-center font-bold mt-10'>Project Management Project</h1>
      <h1 className='text-white text-2xl text-center font-bold mt-10'>Scope Statement</h1>
      <img src={"/scope2.png"} alt=""  className='block ml-auto mr-auto w-[40%] mt-12 transition-all ease-in-out duration-100 hover:w-[60%]'/>
    </div>
  )
}

export default scope
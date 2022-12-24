import Head from 'next/head'
import Link from 'next/link'
import React from 'react'
import Navbar from '../../components/Navbar'

const One = () => {
  return (
    <section className='bg-black bg-hero h-full bg-repeat-y'>
      <Head>
        <title>PM Project</title>
      </Head>
      <Navbar></Navbar>
    <h1 className='text-white text-3xl text-center font-bold mt-10'>Project Management Project</h1>
    <ul className='flex mt-11 gap-5'>
    <li className='ml-5'>
      <Link href={"/projects/1/teamC"}>
      <img src={"/teamC.png"} alt="" className='w-[500px] h-[300px]'/>
      </Link>
      <h1 className='text-white text-2xl text-center font-bold mt-3 cursor-default capitalize'>Team Contract</h1>
    </li>
    <li className='ml-5'>
      <Link href={"/projects/1/stake"}>
      <img src={"/stake2.png"} alt="" className='w-[500px] h-[300px]'/>
      </Link>
      <h1 className='text-white text-2xl text-center font-bold mt-3 cursor-default capitalize'>stakeholder analysis</h1>
    </li>
    <li className='ml-5'>
      <Link href={"/projects/1/comms"}>
      <img src={"/comms.png"} alt="" className='w-[500px] h-[300px]'/>
      </Link>
      <h1 className='text-white text-2xl text-center font-bold mt-3 cursor-default capitalize'>communications management plan</h1>
    </li>
    </ul>
    </section>
  )
}

export default One
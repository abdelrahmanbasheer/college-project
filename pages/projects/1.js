import Head from 'next/head'
import Link from 'next/link'
import React from 'react'
import Navbar from '../../components/Navbar'

const One = () => {
  return (
    <section className=' bg-hero h-[full] 3xl:h-[170vh] bg-repeat-y'>
      <Head>
        <title>PM Project</title>
      </Head>
      <Navbar></Navbar>
    <h1 className='text-white text-3xl text-center font-bold mt-10'>Project Management Project</h1>
    <ul className='flex mt-11 gap-5 flex-wrap justify-center'>
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
    <li className='ml-5'>
      <Link href={"/projects/1/scope"}>
      <img src={"/scope.jpg"} alt="" className='w-[500px] h-[300px]'/>
      </Link>
      <h1 className='text-white text-2xl text-center font-bold mt-3 cursor-default capitalize'>Scope Statement</h1>
    </li>
    <li className='ml-5'>
      <Link href={"/projects/1/wbs"}>
      <img src={"/wbs1.png"} alt="" className='w-[500px] h-[300px]'/>
      </Link>
      <h1 className='text-white text-2xl text-center font-bold mt-3 cursor-default capitalize'>Work breakdown structure</h1>
    </li>
    <li className='ml-5'>
      <Link href={"https://sharing.clickup.com/9004001498/g/h/8cawa6u-82/b36865963f4669e"} target="_blank">
      <img src={"/gant.png"} alt="" className='w-[500px] h-[300px]'/>
      </Link>
      <h1 className='text-white text-2xl text-center font-bold mt-3 cursor-default capitalize'>gant char & network diagram</h1>
    </li>
    <li className='ml-5'>
      <Link href={"/projects/1/res"}>
      <img src={"/res1.webp"} alt="" className='w-[500px] h-[300px]'/>
      </Link>
      <h1 className='text-white text-2xl text-center font-bold mt-3 cursor-default capitalize'>Resource Histogram</h1>
    </li>
    <li className='ml-5'>
      <Link href={"/projects/1/risk"}>
      <img src={"/risk1.png"} alt="" className='w-[500px] h-[300px]'/>
      </Link>
      <h1 className='text-white text-2xl text-center font-bold mt-3 cursor-default capitalize'>Probability/Impact Matrix</h1>
    </li>
    <li className='ml-5'>
      <Link href={"/projects/1/mile"}>
      <img src={"/mile1.webp"} alt="" className='w-[500px] h-[300px]'/>
      </Link>
      <h1 className='text-white text-2xl text-center font-bold mt-3 cursor-default capitalize'>project team meeting</h1>
    </li>
    <li className='ml-5'>
      <Link href={"/projects/1/meeting"}>
      <img src={"/meeting1.png"} alt="" className='w-[500px] h-[300px]'/>
      </Link>
      <h1 className='text-white text-2xl text-center font-bold mt-3 cursor-default capitalize'>project team meeting</h1>
    </li>
    </ul>
    <h1>B</h1>
    </section>
  )
}

export default One
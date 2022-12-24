import Head from 'next/head'
import React from 'react'
import Navbar from '../../../components/Navbar'

const comms = () => {
  return (
    <div className='bg-black bg-hero h-full bg-repeat-y'>
    <Head>
      <title>Stakeholder Analysis</title>
    </Head>
    <Navbar></Navbar>
    <h1 className='text-white text-3xl text-center font-bold mt-10'>Project Management Project</h1>
    <h1 className='text-white text-2xl text-center font-bold mt-10 capitalize'>communications management plan</h1>
    <img src={"/comms1.png"} alt="" className='block ml-auto mr-auto w-[50%] mt-12'/>
    <ul>
        <h1 className='text-white text-xl ml-4 font-bold mt-10' >1.1  PURPOSE OF COMMUNICATIONS MANAGEMENT PLAN</h1>
        <li className='text-white text-xl ml-4'>
        The overall objective of a Communications Management Plan is to promote the success of a project by meeting the information needs of project stakeholders. The <strong>Fraud prevention </strong>Fraud prevention Communications Management Plan (CMP) defines the project’s structure and methods of information collection, screening, formatting, and distribution and outline understanding among project teams regarding the actions and processes necessary to facilitate the critical links among people, ideas, and information that are necessary for project success.
The intended audience of the <strong>Fraud prevention </strong> CMP is the project manager, project team, project sponsor and any senior leaders whose support is needed to carry out communication plans.
        </li>
        <li className='text-white text-xl '>
        <h1 className='text-white text-xl ml-4 font-bold mt-10' >2.	STAKEHOLDER IDENTIFICATION AND ANALYSIS</h1>
        <img src={"/stake.png"} alt="" className='block ml-auto mr-auto w-[50%] mt-12'/>
        </li>
        <li className='text-white text-xl '>
        <h1 className='text-white text-xl ml-4 font-bold mt-10 text-center' >COMMUNICATIONS VEHICLES</h1>
        <h1 className='text-white text-xl ml-4 font-bold ' >2.1	COMMUNICATIONS MATRIX</h1>
        <img src={"/comms2.png"} alt="" className='block ml-auto mr-auto w-[50%] mt-12'/>
        </li>
      </ul>
  </div>
  )
}

export default comms
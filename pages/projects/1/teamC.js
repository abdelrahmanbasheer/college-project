import Head from 'next/head'
import React from 'react'
import Navbar from '../../../components/Navbar'

const TeamC = () => {
  return (
    <div className='bg-black bg-hero h-full bg-repeat-y'>
      <Head>
        <title>Team Contract</title>
      </Head>
      <Navbar></Navbar>
      <h1 className='text-white text-3xl text-center font-bold mt-10'>Project Management Project</h1>
      <h1 className='text-white text-2xl text-center font-bold mt-10'>Team Contract</h1>
      <img src={"/teamC.png"} alt="" className='block ml-auto mr-auto w-[50%] mt-20'/>
      <ul>
        <h1 className='text-white text-xl ml-4 font-bold mt-10' >Code of Conduct:  As a project team, we will:</h1>
        <li className='text-white text-xl ml-4'>
        Ensure the project's success, we will expend 35 hours per week to it. 
        </li>
        <li className='text-white text-xl ml-4'>
        Divide the work among team members based on the project manager's vision and each team member's skills. 
        </li>
        <li className='text-white text-xl ml-4'>
        According to the project plan, the project manager should determine who is responsible for which tasks, as well as the rules for each team member.
        </li>
        <li className='text-white text-xl ml-4'>
        If team members disagree about the quality of the work, a discussion will be held, and the work will be chosen based on the acceptance criteria and the needs of the customer.
        </li>
        <li className='text-white text-xl ml-4'>
        Establish deadlines every 9 days 
        </li>
        <li className='text-white text-xl ml-4'>
        Ensure that everyone is up to date on all project-related information.
        </li>
      </ul>
      <ul>
        <h1 className='text-white text-xl ml-4 font-bold mt-10' >Participation: We will:</h1>
        <li className='text-white text-xl ml-4'>
        We accept and promote new ideas to solve a problem or to enhance the quality of the project, but before we set acceptance criteria and the client and project manager sign the contract.
        </li>
        <li className='text-white text-xl ml-4'>
        When an idea or opinion is put forward, the project manager expresses an opinion with the approval of both the team leader and the team members
        </li>
        <li className='text-white text-xl ml-4'>
        Participation rules will be established for each stakeholder.
        </li>
      </ul>
      <ul>
        <h1 className='text-white text-xl ml-4 font-bold mt-10' >Communication: We will:</h1>
        <li className='text-white text-xl ml-4'>
        Organize meetings every Sunday and Thursday to create a project schedule, capture minutes from these meetings, and send an email to all team members.
        </li>
        <li className='text-white text-xl ml-4'>
        Ensure that everyone is aware of the deadlines that must be met.
        </li>
        <li className='text-white text-xl ml-4'>
        Keep a record of the conversations.
        </li>
        <li className='text-white text-xl ml-4'>
        If something urgent occurs, the team will need to meet outside the classroom it will not be long; simply discuss it and leave immediately.
        </li>
        <li className='text-white text-xl ml-4'>
        A brief summary and action plan will be provided for each meeting.
        </li>
      </ul>
      <ul>
        <h1 className='text-white text-xl ml-4 font-bold mt-10' >Problem Solving: We will:</h1>
        <li className='text-white text-xl ml-4'>
        The problem-solving rules are as follows: seek to understand before seeking to solve. Search early and often.
        </li>
        <li className='text-white text-xl ml-4'>
        Ensure that every suggestion is taken into account.
        </li>
        <li className='text-white text-xl ml-4'>
        Instead of giving general advice, provide feedback to make positive improvements.
        </li>
      </ul>
      <ul>
        <h1 className='text-white text-xl ml-4 font-bold mt-10' >Meeting Guidelines: We will:</h1>
        <li className='text-white text-xl ml-4'>
        Every Sunday and Thursday, hold a direct meeting.
        </li>
        <li className='text-white text-xl ml-4'>
        Hold regular meetings to keep the team informed of progress.
        </li>
        <li className='text-white text-xl ml-4'>
        Team members should Take Notes of Off-Topic Questions and Concerns.
        </li>
        <li className='text-white text-xl ml-4'>
        After each meeting, send out meeting minutes.
        </li>
      </ul>
    </div>
  )
}

export default TeamC
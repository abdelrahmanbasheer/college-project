import Head from 'next/head'
import React from 'react'
import Navbar from '../../../components/Navbar'

const meeting = () => {
  return (
    <div className='bg-black bg-hero h-full bg-repeat-y'>
    <Head>
      <title>Kickoff Meeting</title>
    </Head>
    <Navbar></Navbar>
    <h1 className='text-white text-3xl text-center font-bold mt-10'>Project Management Project</h1>
    <h1 className='text-white text-2xl text-center font-bold mt-10'>Kickoff Meeting</h1>
    <ul>
        <li>
        <h1 className='text-white text-xl ml-4 font-bold mt-10' >Meeting Objective:</h1>
        <p className='text-white text-xl ml-8'>
        •	What do we need to accomplish during this meeting?
        <br />
•	What decisions must be made in this meeting to ensure we stay on track with the critical path?
<br />
•	Are we on track or ahead of schedule? Are all parties informed of task updates?
<br />
•	Where are we with the project budget?
<br />
•	Are we working within our budget, time, and scope constraints? Quality restrictions?
<br />
•	What new or anticipated issues should the team discuss further?
<br />
•	Do all team members understand the next steps (due dates and resources required)?

        </p>
        </li>
        <li>
        <h1 className='text-white text-xl ml-4 font-bold mt-10' >Agenda:</h1>
        <p className='text-white text-xl ml-8'>
        •	Ali abdoush 	BA	(Defining business requirements)
Abdullah Khalil	HR	(Employee management)
Mohamed ramy	developer	(Coding & Installing)
Abdelrahman Besheer 	Tester	(Validation)
<br />

•	The project is to inform the fraud situation in OLX platforms through diverse solutions aimed to minimize or prevent the problem.
<br />
•   Licenses that would be used are as follows: RAIL (Responsible AI Licenses), AI software Licenses, Hardware equipment (computers), Human resources (Developers, Testers), Money.
<br />
•How we will be performing the project will go as follows. First thing our team would identify the common fraud scams, then develop algorithms to fight those scams, lastly implement the algorithms in the AI software and deploy it in the platform after testing and validating it.
<br />
•	Review of project-related documents (i.e., business case, project request, contract
<br />
        </p>
        <h1 className='text-white text-xl ml-8 font-bold mt-10' >project organizational structure</h1>
        <img src="/meeting3.png" alt="" className='ml-12 mt-5'/>
        </li>
        <li>
        <h1 className='text-white text-xl ml-4 font-bold mt-10' >Target to acheive:</h1>
        <p className='text-white text-xl ml-8'>
        •	In-scope
        <br />
        	Our desired outcome is to secure the platform for users to sell and buy products with no fraud or manipulation involved.
<br />
•	Time
<br />
&nbsp; &nbsp; &nbsp; &nbsp;  	4 months
<br />
	•	cost:
<br />
&nbsp; &nbsp; &nbsp; &nbsp;  20k$
<br />
•	Goals
<br />
&nbsp; &nbsp; &nbsp; &nbsp;  automatically detect and prevent frauds. This may increase costumers
•	List of action items from meeting


        </p>
        </li>
    <li>
    <img src="/meeting4.png" alt="" className=' ml-auto transition-all ease-in-out  delay-75 hover:w-[50%]  mr-auto mt-5'/>
    </li>
    </ul>
    </div>
  )
}

export default meeting
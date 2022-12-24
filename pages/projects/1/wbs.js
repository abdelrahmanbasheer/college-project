import Head from 'next/head'
import React from 'react'
import Navbar from '../../../components/Navbar'

const wbs = () => {
  return (
    <div className='bg-black bg-hero h-full 3xl:h-[120vh] bg-repeat-y'>
    <Head>
      <title>Scope Statement</title>
    </Head>
    <Navbar></Navbar>
    <h1 className='text-white text-3xl text-center font-bold mt-10'>Project Management Project</h1>
    <h1 className='text-white text-2xl text-center font-bold mt-10'>Work Breakdown Structure</h1>
    <ul className='flex flex-wrap'>
        <li>
        <h1 className='text-white text-xl  font-bold mt-10 ml-4'>1.0 Initiation</h1>
        <p className='text-white text-xl  ml-12'>
1.1 Project Summarization.
<br />
1.2 Weighted Scoring Model.
<br />
1.3 Project Manager Job Description.
<br />
1.4 Research Information.
<br />
1.5 Business Case.
<br />
1.6 Project Charter
<br />
1.7 Search for a suitable fraud detection API</p>
        </li>
        <li>
        <h1 className='text-white text-xl  font-bold mt-10 ml-4'>2.0 Planning</h1>
        <p className='text-white text-xl  ml-12'>
2.1 Project prerequisite
<br />
2.2 Team members personality traits
<br />
2.3 Team Contract 
<br />
2.4 stakeholder analysis
<br />
2.5 scope statement
<br />
2.6 WBS
<br />
2.7 Gantt Chart 
<br />

2.8 Network Diagram 
<br />

2.9 Estimating project cost spreadsheet</p>
        </li>
        <li>
        <h1 className='text-white text-xl  font-bold mt-10 ml-4'>3.0 Executing</h1>
        <p className='text-white text-xl  ml-12'>
        3.1 Use of crimescoreAPI
<br />
3.2 Develop project website
<br />
3.3 Short presentation for the project
<br />
3.4 A milestone report 
<br />
3.5 Meeting Agenda 
</p>
        </li>
        <li>
        <h1 className='text-white text-xl  font-bold mt-10 ml-4'>4.0 Controlling</h1>
        <p className='text-white text-xl  ml-12'>
        4.1 The earned value table.
<br />
4.2 Update cost estimate
<br />
4.3 Update financial
<br />
4.4 Project Manager Meeting
<br />
4.5 Probability/Impact matrix and list of prioritized risks.
</p>
        </li>
        <li>
        <h1 className='text-white text-xl  font-bold mt-10 ml-4'>5.0 Closing</h1>
        <p className='text-white text-xl  ml-12'>
        5.1 Final Project Presentation.

<br />
5.2 Lessons-learned report.
<br />
5.3 Final project report 
<br />
5.4 Financial Benefit Report 
<br />
5.5 Final update project website
</p>
        </li>
    </ul>
  </div>
  )
}

export default wbs
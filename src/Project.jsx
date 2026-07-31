import React from 'react'
import portfolio from './assets/portfolio.png'

import cicd from './assets/cicd.png'
import game from './assets/game.png'
import automation from './assets/automation.png'


const Project = () => {
  return (
    <div>
      <h1 className=' text-[50px] text-center  text-white mt-[60px] font-serif hover:scale-x-110 hover:text-green-200 transition-all duration-300'>Projects</h1>
      <div className='relative overflow-y-auto  text-white top-10 flex flex-col gap-10 '>

        <div className='flex flex-row gap-10  items-center hover:bg-slate-800 h-[50vh] hover:scale-x-102  origin-left transition-transform duration-500  rounded-xl mr-[50px] '>
          <img src={portfolio} className='h-[40vh] w-[100vw] ml-[2vw] mt-[2vh]  rounded-xl hover:shadow-[0_0_50px_1px] shadow-cyan-500/50 '></img>
          <p className='text-start text-[20px] '>A Hands-on project built with responsive portfolio web application developed using React.js and Tailwind CSS to showcase personal projects, skills, and professional information. The application provides a modern user interface, smooth navigation, and adaptive design to ensure compatibility across different devices such as desktops, tablets, and mobile phones.</p>
        </div>
        
        <div className='flex flex-row gap-10  items-center hover:bg-slate-800 h-[50vh] hover:scale-x-102  origin-left transition-transform duration-500  rounded-xl mr-[50px] '>
          <img src={cicd} className='h-[40vh] w-[100vw] ml-[2vw] mt-[2vh]  rounded-xl hover:shadow-[0_0_50px_1px] shadow-cyan-500/50 '></img>
          <p className='text-start text-[20px] '>Developed an end-to-end CI/CD pipeline for microservices to automate the build, testing, and deployment process. Implemented containerized services and automated workflows using Docker, Git, and CI/CD tools, with AI-assisted guidance to understand continuous integration, continuous delivery, and scalable deployment practices in modern DevOps environments.</p>
        </div>
        
        <div className='flex flex-row gap-10  items-center mb-[50px] hover:bg-slate-800 h-[50vh] hover:scale-x-102  origin-left transition-transform duration-500  rounded-xl mr-[50px] '>
          <img src={game} className='h-[40vh] w-[100vw] ml-[2vw] mt-[2vh]  rounded-xl hover:shadow-[0_0_50px_1px] shadow-cyan-500/50 '></img>
          <p className='text-start text-[20px] '>Developed a 2D platformer game using Unity and C#, where the player controls a character to collect fruits while avoiding obstacles and reaching the finish line. Implemented game mechanics such as player movement, collision detection, scoring system, and level progression to create an interactive gaming experience.</p>
        </div>

        <div className='flex flex-row gap-10 items-center mb-[50px] hover:bg-slate-800 h-[70vh] hover:scale-x-102  origin-left transition-transform duration-500  rounded-xl mr-[50px] '>
          <img src={automation} className='h-[300px]  w-[100vw] ml-[2vw] mt-[2vh]  rounded-xl hover:shadow-[0_0_50px_1px] shadow-cyan-500/50 '></img>
          <p className='text-start text-[20px] '><ul class="list-disc"> <li >Developed an end-to-end automated CI/CD deployment pipeline using GitHub Actions and Linux, where the workflow triggers automated build and validation checks instantly upon every code commit.</li><li>Implemented core devops mechanics such as custom self-hosted runner provisioning, secure environment validation scripts, background process management using PM2, and zero-downtime server reloads to create a resilient hosting pipeline.</li></ul></p>
        </div>

      </div>
    </div>
  )
}

export default Project

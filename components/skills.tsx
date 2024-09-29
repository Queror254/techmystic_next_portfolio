'use client'
import Image from 'next/image'
import Test from '@/public/test.svg'
import React from 'react'

const Skills = () => {
  return (
    <div className='mt-5 py-10 flex justify-center items-center'>
      <section className="mainSection" id="Skills">
        <div className="innerPadding">
          <div className="Skills_skillHead__T6_DJ">
            <button className="Skills_mySkills__Na9XU">MY SKILLS</button>
            <div className="Skills_svgEffect__8NJfh">
              <svg xmlns="http://www.w3.org/2000/svg" width="744" height="423" viewBox="0 0 744 423" fill="none">
                <path d="M2 126.5V86H258V0M366.5 422.5V0M741.5 133V86H481.5V0" stroke="url(#paint0_linear_2101_768)" stroke-width="4"></path>
                <defs>
                  <linearGradient id="paint0_linear_2101_768" x1="371.963" y1="12" x2="359.62" y2="389.388" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#292929"></stop>
                    <stop offset="1" stop-color="white" stop-opacity="0"></stop>
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
          <div className="Skills_skills__rCqVE">
            <div className="Skills_full_stack__KiQFa">
              <div className="Skills_frontend__xWEWg">
                <h1 className='text-2xl'>Frontend</h1> 
                <div className='flex flex-wrap gap-5'>
                <button className="skill_skill__oFitQ">HTML5</button>
                <button className="skill_skill__oFitQ">CSS3</button>
                <button className="skill_skill__oFitQ">JavaScript (ES6+)</button>
                <button className="skill_skill__oFitQ">React.js</button>
                <button className="skill_skill__oFitQ">Next.js</button>
                <button className="skill_skill__oFitQ">Redux</button>
                <button className="skill_skill__oFitQ">Tailwind CSS</button>
                <button className="skill_skill__oFitQ">Framer motion</button>
                <button className="skill_skill__oFitQ">DOM</button>
                <button className="skill_skill__oFitQ">Unit Test</button>
                <button className="skill_skill__oFitQ">Performance Optimize</button>
                <button className="skill_skill__oFitQ">SSR</button>
                </div>
              </div>
              <div className="Skills_backend__IuTAc">
                <h1 className='text-2xl flex justify-end items-end w-full'>Backend</h1> 
                <div className='flex flex-wrap gap-5'>
                <button className="skill_skill__oFitQ">Node</button>
                <button className="skill_skill__oFitQ">.NET Core</button>
                <button className="skill_skill__oFitQ">ASP.NET Core</button>
                <button className="skill_skill__oFitQ">Bun</button>
                <button className="skill_skill__oFitQ">Express</button>
                <button className="skill_skill__oFitQ">Rest Api</button>
                <button className="skill_skill__oFitQ">Validation</button>
                <button className="skill_skill__oFitQ">JWT/OAuth</button>
                <button className="skill_skill__oFitQ">SQL</button>
                <button className="skill_skill__oFitQ">Postgres</button>
                <button className="skill_skill__oFitQ">Prisma ORM</button>
                <button className="skill_skill__oFitQ">EF Core</button>
                <button className="skill_skill__oFitQ">DB Modeling</button>
                <button className="skill_skill__oFitQ">Stripe Payments</button>
                </div>
              </div>
            </div>
            <div className="Skills_others__ovqrN">
              <div className="Skills_lang__M0RLw">
                <button className="skill_skill__oFitQ">JavaScript</button>
                <button className="skill_skill__oFitQ">TypeScript</button>
                <button className="skill_skill__oFitQ">Python</button>
                <button className="skill_skill__oFitQ">C#</button>
              </div>
              <div className="Skills_additional__0WdkS">
                <button className="skill_skill__oFitQ">React Native</button>
                <button className="skill_skill__oFitQ">Git</button>
                <button className="skill_skill__oFitQ">Github</button>
                <button className="skill_skill__oFitQ">Linux</button>
                <button className="skill_skill__oFitQ">WordPress</button>
                <button className="skill_skill__oFitQ">VPS</button>
                <button className="skill_skill__oFitQ">Vercel</button>
              </div>
              <div className="Skills_design__MYabM">
                <button className="skill_skill__oFitQ">UX/UI Design</button>
                <button className="skill_skill__oFitQ">Product design</button>
                <button className="skill_skill__oFitQ">Figma</button>
                <button className="skill_skill__oFitQ"></button>
                <button className="skill_skill__oFitQ"></button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Skills

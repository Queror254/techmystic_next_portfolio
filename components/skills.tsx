'use client'
import Image from 'next/image'
import React from 'react'

// Skills data array grouped into frontend and backend
const skillsData = {
  frontend: [
    { id: 1, name: 'JavaScript', icon: '/icons/js.svg' },
    { id: 2, name: 'TypeScript', icon: '/icons/ts.svg' },
    { id: 3, name: 'React', icon: '/icons/react.svg' },
    { id: 4, name: 'Next.js', icon: '/icons/nextjs.svg' }
  ],
  backend: [
    { id: 5, name: 'Node.js', icon: '/icons/node.svg' },
    { id: 6, name: 'Express.js', icon: '/icons/express.svg' },
    { id: 7, name: 'MongoDB', icon: '/icons/mongodb.svg' },
    { id: 8, name: 'PostgreSQL', icon: '/icons/postgresql.svg' }
  ]
}

const Skills = () => {
  return (
    <div className='mt-2 py-2'>
      <div className='relative flex flex-col h-full w-full'>
        <h2 className='section_title flex flex-row justify-center items-center gap-1'><span className='underline decoration-emerald-600 text-transparent'>---</span>My Skills <span className='underline decoration-emerald-600 text-transparent'>---</span> </h2>
        <section className='flex flex-col justify-center items-center px-4'>
        {/* Frontend Skills */}
        <div className='mt-4 w-full'>
          <h3 className='text-xl pl-4 flex flex-row gap-1'>Frontend<span className='underline decoration-emerald-600 text-transparent'>-</span></h3>
          <div className='grid grid-cols-2 gap-4 mt-2'>
            {skillsData.frontend.map((skill) => (
              <button key={skill.id} className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-100 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
          {skill.name}
        </button>
            ))}
          </div>
        </div>

        {/* Backend Skills */}
        <div className='mt-4 w-full'>
          <h3 className='text-xl pl-4 flex flex-row'>Backend<span className='underline decoration-emerald-600 text-transparent -top-5'>-</span></h3>
          <div className='grid grid-cols-2 gap-4 mt-2'>
            {skillsData.backend.map((skill) => (              
        <button key={skill.id} className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-100 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
          {skill.name}
        </button>
            ))}
          </div>
        </div>
        </section>
      </div>
    </div>
  )
}

export default Skills

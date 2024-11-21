//@ts-ignore
'use client'
import React from 'react'
const Contact = () => {
  return (
    <div className='py-4 px-2 mb-20 flex justify-center items-center text-white'>
  <section id="contact" className='flex flex-col gap-2 justify-center items-center'>
  <p>Interested in working with me? Drop me a message!</p>
  <a href="mailto:mwendavictorm@gmail.com">
    <button className="p-[3px] relative">
  <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
  <div className="px-8 py-2  bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
    Email me
  </div>
</button>
  </a>
</section>
    </div>
  )
}

export default Contact

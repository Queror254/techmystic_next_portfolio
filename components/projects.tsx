'use client'
import React from 'react'
const Projects = () => {
  return (
    <div className='py-10 flex justify-center items-center'>
        <section id="projects">
  <h2>Projects</h2>
  
  <div className="project">
    <h3>Task Management App</h3>
    <p>A fullstack task management application built using Node.js, MongoDB, and React. Allows users to create, edit, and delete tasks, and collaborate in real-time.</p>
    <ul>
      <li><strong>Technologies:</strong> Node.js, MongoDB, React, WebSocket</li>
      <li><a href="https://github.com/yourusername/task-management-app">View Code</a></li>
      <li><a href="https://task-app-demo.com">Live Demo</a></li>
    </ul>
  </div>
  
  <div className="project">
    <h3>E-Commerce Platform</h3>
    <p>An e-commerce platform built with Next.js and MongoDB, complete with product listings, shopping cart functionality, and Stripe payment integration.</p>
    <ul>
      <li><strong>Technologies:</strong> Next.js, MongoDB, Stripe API</li>
      <li><a href="https://github.com/yourusername/ecommerce-platform">View Code</a></li>
      <li><a href="https://ecommerce-demo.com">Live Demo</a></li>
    </ul>
  </div>

</section>

    </div>
  )
}

export default Projects

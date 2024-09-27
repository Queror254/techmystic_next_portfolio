'use client'
import React from 'react'
const Contact = () => {
  return (
    <div className='py-10 flex justify-center items-center'>
  <section id="contact">
  <h2>Contact</h2>
  <p>Interested in working with me? Drop me a message!</p>
  <form action="/send-message" method="post">
    <input type="text" name="name" placeholder="Your Name" required />
    <input type="email" name="email" placeholder="Your Email" required />
    <textarea name="message" placeholder="Your Message" required></textarea>
    <button type="submit">Send</button>
  </form>
</section>
    </div>
  )
}

export default Contact

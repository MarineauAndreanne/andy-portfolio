import React, { useState } from 'react'
import emailjs from 'emailjs-com'

import { StyledEmail } from './styles'

const Email = ({ title, description }) => {
  const [emailSuccess, setEmailSuccess] = useState(null)

  function sendEmail(e) {
    e.preventDefault()

    emailjs.sendForm('service_tile7de', 'portfolio_template', e.target, 'izlkk8tzPMelNQNsN').then(
      (result) => {
        console.log(result.text)
        setEmailSuccess(true)
      },
      (error) => {
        console.log(error.text)
      }
    )
    e.target.reset()
  }

  return (
    <StyledEmail>
      <section className="contact">
        <h2>{title}</h2>
        <h3>{description}</h3>

        <form onSubmit={sendEmail}>
          <input type="text" placeholder="Name" name="from_name"></input>
          <input type="email" placeholder="Email" name="reply_to"></input>
          <textarea placeholder="Message" className="message" name="message"></textarea>
          <button type="submit">Send Message</button>
          {emailSuccess ? (
            <small>
              <br />
              Thanks for getting in touch ! ⭐️
            </small>
          ) : (
            <span></span>
          )}
        </form>
      </section>
    </StyledEmail>
  )
}

export default Email

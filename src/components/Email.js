import React, { useState } from "react"
import emailjs from "emailjs-com"

import "./Email.css"

const Email = () => {
  const [emailSuccess, setEmailSuccess] = useState(null)

  function sendEmail(e) {
    e.preventDefault()

    emailjs
      .sendForm(
        "service_tile7de",
        "portfolio_template",
        e.target,
        "izlkk8tzPMelNQNsN"
      )
      .then(
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
    <section className="contact">
      <span className="page-title">CONTACT</span>
      <h2>Get in Touch</h2>
      <form onSubmit={sendEmail}>
        <input type="text" placeholder="Name" name="from_name"></input>
        <input type="email" placeholder="Email" name="reply_to"></input>
        <textarea
          placeholder="Message"
          className="message"
          name="message"
        ></textarea>
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
  )
}

export default Email

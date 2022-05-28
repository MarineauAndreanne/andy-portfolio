import React from "react"
import Layout from "../components/Layout"

import "../styles/contact.css"

const contact = () => {
  return (
    <Layout>
      <section className="contact">
        <span className="page-title">CONTACT</span>
        <h2>Get in Touch</h2>
        <form>
          <input type="text" placeholder="Name"></input>
          <input type="email" placeholder="Email"></input>
          <textarea placeholder="Message" className="message"></textarea>
          <button type="submit">Send Message</button>
        </form>
      </section>
    </Layout>
  )
}

export default contact

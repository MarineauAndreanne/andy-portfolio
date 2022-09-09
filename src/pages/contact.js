import React from 'react'
import { Toaster } from 'react-hot-toast'
import Email from 'components/Email'

const Contact = () => {
  return (
    <>
      <Email title="CONTACT" description="Get in touch" />
      <Toaster />
    </>
  )
}

export default Contact

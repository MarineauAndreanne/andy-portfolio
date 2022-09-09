import React from 'react'
import { Toaster } from 'react-hot-toast'
import About from 'components/About'

const AboutPage = () => {
  return (
    <>
      <About title="ABOUT" description="Junior Full-Stack Developer." />
      <Toaster />
    </>
  )
}

export default AboutPage

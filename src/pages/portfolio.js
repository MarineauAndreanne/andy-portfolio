import React from 'react'
import { Toaster } from 'react-hot-toast'
import Projects from 'components/Projects'
import projects from 'data/projects'

const Portfolio = () => {
  return (
    <>
      <Projects title={'PORTFOLIO'} description={'Web Development Projects'} projects={projects} />
      <Toaster />
    </>
  )
}

export default Portfolio

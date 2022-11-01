import React from 'react'
import Projects from 'components/Projects'
import projects from 'data/projects'

const Portfolio = () => {
  return (
    <>
      <Projects title={'PORTFOLIO'} description={'Web Development Projects'} projects={projects} />
    </>
  )
}

export default Portfolio

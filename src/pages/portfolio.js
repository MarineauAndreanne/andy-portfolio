import React from "react"
import Layout from "../components/Layout"
import Projects from "../components/Projects"

const portfolio = () => {
  const projects = [
    {
      name: "Synergia",
      description: "Ecommerce",
      details: "Next.JS - Sanity - Stipe",
      githubLink: "www.github.com",
      netlifyLink: "www.netlify.com",
      image: "synergia.jpg",
    },
    {
      name: "Weather App",
      description: "Renting Platform Renting Platform Renting Platform",
      details: "Next.JS - Sanity - Stipe",
      githubLink: "www.github.com",
      netlifyLink: "www.netlify.com",
    },
    {
      name: "Dictionary",
      description: "NASA API",
      details: "Next.JS - Sanity - Stipe",
      githubLink: "www.github.com",
      netlifyLink: "www.netlify.com",
    },
    {
      name: "Space News",
      description: "NASA API",
      details: "Open API",
      githubLink: "www.github.com",
      netlifyLink: "www.netlify.com",
    },
    {
      name: "TRVL",
      description: "Travel Advisor",
      details: "React - Open API - Material UI",
      githubLink: "www.github.com",
      netlifyLink: "www.netlify.com",
    },
    {
      name: "Anahata",
      description: "Renting Platform",
      details: "React - Sanity - Stipe",
      githubLink: "www.github.com",
      netlifyLink: "www.netlify.com",
    },
  ]
  return (
    <Layout>
      <Projects
        title={"PORTFOLIO"}
        description={"Web Development Projects"}
        projects={projects}
      />
    </Layout>
  )
}

export default portfolio

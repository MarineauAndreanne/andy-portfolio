import React from "react"
import Layout from "../components/Layout"
import About from "../components/About"

const about = () => {
  return (
    <Layout>
      <About title={"ABOUT"} description={"Full-stack web developer."} />
    </Layout>
  )
}

export default about

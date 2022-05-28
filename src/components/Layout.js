import React from "react"
import Sidebar from "./Sidebar"

import "./Layout.css"
import "@fontsource/montserrat"
import "@fontsource/poppins"

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Sidebar />

      <div className="content">{children}</div>
    </div>
  )
}

export default Layout

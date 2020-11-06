import React from "react"
import Header from "../Header"
import "./layout.css"

function Layout({ children }) {
  return (
    <>
      <main>{children}</main>
    </>
  )
}

export default Layout

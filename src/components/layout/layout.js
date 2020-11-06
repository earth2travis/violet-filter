import React from "react"
import Header from "../header"
import "./layout.css"

function Layout({ children }) {
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  )
}

export default Layout

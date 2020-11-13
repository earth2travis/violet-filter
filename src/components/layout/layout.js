import React from "react"
import Footer from "../Footer"
import Header from "../header"
import "./layout.css"

function Layout({ children }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout

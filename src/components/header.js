import React from "react"
import { Link } from "gatsby"
import "./Header.css"

const Header = ({ siteTitle }) => (
  <div className="Header">
    <div className="HeaderGroup">
      <Link to="/">
        <img
          src={require("../../src/images/logo-designcode.svg")}
          width="30"
          alt=""
        />
      </Link>
      <Link to="#">Technology</Link>
      <Link to="#">Research</Link>
      <Link to="#">Company</Link>
      <button>Pre-Order</button>
    </div>
  </div>
)

export default Header

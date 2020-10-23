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
      <Link to="/courses">Courses</Link>
      <Link to="/downloads">Downloads</Link>
      <Link to="/workshops">Workshops</Link>
      <Link to="/buy">Buy</Link>
    </div>
  </div>
)

export default Header

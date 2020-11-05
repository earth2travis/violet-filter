import React from "react"
import { Link } from "gatsby"
import "./Header.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons"

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
      <Link to="https://www.facebook.com/VioletFilterCo/">
        <FontAwesomeIcon icon={faFacebook} size="2x" />
      </Link>
      <Link to="https://twitter.com/VioletFilterCo">
        <FontAwesomeIcon icon={faTwitter} size="2x" />
      </Link>
      <Link to="https://www.instagram.com/violetfilterco/">
        <FontAwesomeIcon icon={faInstagram} size="2x" />
      </Link>
      <Link to="/about">About</Link>
      <button>Sign Up</button>
    </div>
  </div>
)

export default Header

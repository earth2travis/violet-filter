import React from "react"
import { Link } from "gatsby"
import "./Header.css"

class Header extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      hasScrolled: false,
    }
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll)
  }

  handleScroll = event => {
    const scrollTop = window.pageYOffset

    if (scrollTop > 50) {
      this.setState({ hasScrolled: true })
    } else {
      this.setState({ hasScrolled: false })
    }
  }

  render() {
    return (
      <div
        className={this.state.hasScrolled ? "Header HeaderScrolled" : "Header"}
      >
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
  }
}

export default Header

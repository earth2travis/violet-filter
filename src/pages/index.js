import React from "react"
import Layout from "../components/layout/layout"
import SEO from "../components/layout/seo"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons"
import Card from "../components/Card"
import Section from "../components/Section"
import Wave from "../components/Wave"

function IndexPage() {
  return (
    <Layout>
      <SEO title="Home" />
      <div className="Hero">
        <div className="HeroGroup">
          <h1>
            The <br />
            Violet Filter <br />
            Company
          </h1>
          <p>Keep your family safe with LED home air purification</p>
          <button>Stay Informed</button>
          <div className="Logos">
            <a href="https://www.facebook.com/VioletFilterCo/">
              <FontAwesomeIcon icon={faFacebook} size="2x" />
            </a>
            <a href="https://twitter.com/VioletFilterCo">
              <FontAwesomeIcon icon={faTwitter} size="2x" />
            </a>
            <a href="https://www.instagram.com/violetfilterco/">
              <FontAwesomeIcon icon={faInstagram} size="2x" />
            </a>
          </div>
          <Wave />
        </div>
        <div className="Cards">
          <h2>Household Benefits</h2>
          <div className="CardGroup">
            <Card
              title="Virus Inactivation"
              text="View research"
              image={require("../images/wallpaper.jpg")}
            />
            <Card
              title="Allergen Reduction"
              text="View research"
              image={require("../images/wallpaper2.jpg")}
            />
            <Card
              title="Odor Removal"
              text="View research"
              image={require("../images/wallpaper3.jpg")}
            />
          </div>
        </div>
        <Section
          image={require("../images/wallpaper2.jpg")}
          logo={require("../images/logo-react.png")}
          title="Our Mission"
          text="Democratizing clean air that's safe to breathe for everyone."
        />
      </div>
    </Layout>
  )
}

export default IndexPage

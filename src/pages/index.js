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
import staticdata from "../../staticdata.json"
import Cell from "../components/Cell"
import styled from "styled-components"

const SectionCaption = styled.p`
  font-weight: 600;
  font-size: 18px;
  text-transform: uppercase;
  color: #94a4ba;
  text-align: center;
`

const SectionCellGroup = styled.div`
  max-width: 800px;
  margin: 0 auto 100px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 20px;
  padding: 0 20px;
  @media (max-width: 800px) {
    grid-template-columns: repeat(1, 1fr);
  }
`

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
          <p>Keep your family safe with UV-C home air purification</p>
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
        title="Technology"
        text="Our products incorporate a special wavelength of light from the UV-C spectrum. Most people are familiar with UV-A or UV-B because it causes skin to burn when spending time in the Sun. UV-C is too short to make it through our atmosphere and nothing has evolved protection from it. Making this spectrum an effective tool for sterilization and disinfecting."
      />
      <SectionCaption>Notable Features</SectionCaption>
      <SectionCellGroup>
        {staticdata.cells.map(cell => (
          <Cell title={cell.title} image={cell.image} />
        ))}
      </SectionCellGroup>

      <Section
        image={require("../images/wallpaper2.jpg")}
        logo={require("../images/logo-react.png")}
        title="Company"
        text="Like the rest of the world, we were impacted when the coronavirus pandemic ravaged our planet. With that shock, the team was firmly grounded on finding a way to make people safer. This passion was driven by a longing semblance of normalcy we were all missing. Spending countless hours researching and tinkering, ultimately landing where we are today – affordable HEPA air filtration combined with ultraviolet light sterilization capable of killing bacteria and viruses like SARS-COV-19."
      />
      <Section
        image={require("../images/wallpaper2.jpg")}
        logo={require("../images/logo-react.png")}
        title="Mission"
        text="Democratizing clean air that's safe to breathe for everyone."
      />
    </Layout>
  )
}

export default IndexPage

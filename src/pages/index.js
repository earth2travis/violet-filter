import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout/layout"
import SEO from "../components/layout/seo"

function IndexPage() {
  return (
    <Layout>
      <SEO title="Home" />
      <div className="Hero">
        <div className="HeroGroup">
          <h1>
            Violet Filter <br />
            Company
          </h1>
          <p>LED home air purification systems</p>
          <Link to="/page-2/">Stay Informed</Link> <br />
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage

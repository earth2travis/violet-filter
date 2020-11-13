require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

const spaceId = process.env.CONTENTFUL_SPACE_ID
const accessToken = process.env.CONTENTFUL_ACCESS_TOKEN

module.exports = {
  siteMetadata: {
    title: `The Violet Filter Company`,
    description: `UV-C home air purification systems`,
    keywords: `personal, home, air, air purifier, air purifiers, air purification, filter, filters, LED, UV-C, deactivate, deactivation, sterilize, sterilization, disinfect, covid, covid-19, coronavirus, virus, viruses, technology`,
    author: `@earth2travis`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: spaceId,
        accessToken: accessToken,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/static/images`,
      },
    },
    `gatsby-plugin-fontawesome-css`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}

import React from "react"
import { StaticQuery, graphql } from "gatsby"
import styled from "styled-components"

const FooterGroup = styled.footer`
  background: #f1f3f5;
  padding: 50px 0;
  display: grid;
  grid-gap: 20px;
`
const Text = styled.p`
  font-size: 24px;
  font-weight: 600;
  color: #486791;
  max-width: 500px;
  margin: 0 auto;
`
const Button = styled.button`
  background: linear-gradient(93.96deg, #9b51e0 0%, #3436e7 100%);
  box-shadow: 0px 10px 20px rgba(101, 41, 255, 0.15);
  border-radius: 30px;
  color: white;
  border: none;
  padding: 16px 60px;
  font-weight: 600;
  font-size: 24px;
  justify-self: center;
  transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);

  &:hover {
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
    transform: translateY(-3px);
  }
`
const LinkGroup = styled.div`
  color: #5334f5;
  width: 500px;
  margin: 50px auto;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 10px;

  a {
    color: #5334f5;
    transition: 0.8s;
  }

  a:hover {
    color: black;
  }
`

const Love = styled.p`
  font-size: 16px;
  color: #486791;
  max-width: 500px;
  margin: 0 auto;
  padding: 0 20px;
`

const Footer = () => (
  <StaticQuery
    query={graphql`
      query SiteFooterQuery {
        allContentfulLink(sort: { fields: [createdAt], order: ASC }) {
          edges {
            node {
              title
              url
              createdAt
            }
          }
        }
      }
    `}
    render={data => (
      <FooterGroup>
        <Text>Keep your family safe with UV-C home air purification</Text>
        <Button>Tweet</Button>

        <LinkGroup>
          {" "}
          {data.allContentfulLink.edges.map(edge => (
            <a href={edge.node.url}>{edge.node.title}</a>
          ))}
        </LinkGroup>
        <Love>
          Made with{" "}
          <span role="img" aria-label="heart">
            ❤️
          </span>{" "}
          in Austin
        </Love>
      </FooterGroup>
    )}
  />
)

export default Footer

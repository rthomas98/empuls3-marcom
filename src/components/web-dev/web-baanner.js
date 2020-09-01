import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const WebBanner = () => {
  const data = useStaticQuery(graphql`
      query {
          webBanner: file(relativePath: { eq: "web-dev-banner.png" }) {
              childImageSharp {
                  fluid(maxWidth: 665) {
                      ...GatsbyImageSharpFluid
                  }
              }
          }
      }
  `)

  return <Img fluid={data.webBanner.childImageSharp.fluid} alt="" className="img-fluid mx-auto" style={{ width: 665 }} />
}

export default WebBanner

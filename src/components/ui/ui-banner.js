import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const UiBanner = () => {
  const data = useStaticQuery(graphql`
      query {
          uiBanner: file(relativePath: { eq: "ui-banner.jpg" }) {
              childImageSharp {
                  fluid(maxWidth: 1170) {
                      ...GatsbyImageSharpFluid
                  }
              }
          }
      }
  `)

  return <Img fluid={data.uiBanner.childImageSharp.fluid} alt="" className="img-fluid mx-auto" />
}

export default UiBanner

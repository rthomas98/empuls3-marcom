import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const PpcBanner = () => {
  const data = useStaticQuery(graphql`
      query {
          ppcBanner: file(relativePath: { eq: "ppc-banner.png" }) {
              childImageSharp {
                  fluid(maxWidth: 1016) {
                      ...GatsbyImageSharpFluid
                  }
              }
          }
      }
  `)

  return <Img fluid={data.ppcBanner.childImageSharp.fluid} alt="" className="img-fluid mx-auto" />
}

export default PpcBanner

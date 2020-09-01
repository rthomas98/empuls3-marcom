import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const MobileBanner = () => {
  const data = useStaticQuery(graphql`
      query {
          mobileBanner: file(relativePath: { eq: "mobile-banner.png" }) {
              childImageSharp {
                  fluid(maxWidth: 411) {
                      ...GatsbyImageSharpFluid
                  }
              }
          }
      }
  `)

  return <Img fluid={data.mobileBanner.childImageSharp.fluid} alt="" className="img-fluid mx-auto" style={{ width: 411 }} />
}

export default MobileBanner

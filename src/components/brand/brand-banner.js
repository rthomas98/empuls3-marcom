import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const BrandBanner = () => {
  const data = useStaticQuery(graphql`
      query {
          brandBanner: file(relativePath: { eq: "brand-banner.png" }) {
              childImageSharp {
                  fluid(maxWidth: 737) {
                      ...GatsbyImageSharpFluid
                  }
              }
          }
      }
  `)

  return <Img fluid={data.brandBanner.childImageSharp.fluid} alt="" className="img-fluid mx-auto" style={{ width: 600 }} />
}

export default BrandBanner

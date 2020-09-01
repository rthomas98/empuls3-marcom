import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const WpBanner = () => {
  const data = useStaticQuery(graphql`
      query {
          wpBanner: file(relativePath: { eq: "wp-banner.png" }) {
              childImageSharp {
                  fluid(maxWidth: 436) {
                      ...GatsbyImageSharpFluid
                  }
              }
          }
      }
  `)

  return <Img fluid={data.wpBanner.childImageSharp.fluid} alt="" className="img-fluid mx-auto" style={{ width: 436 }} />
}

export default WpBanner

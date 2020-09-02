import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const OverviewBanner = () => {
  const data = useStaticQuery(graphql`
      query {
          overviewBanner: file(relativePath: { eq: "overview-banner.png" }) {
              childImageSharp {
                  fluid(maxWidth: 540) {
                      ...GatsbyImageSharpFluid
                  }
              }
          }
      }
  `)

  return <Img fluid={data.overviewBanner.childImageSharp.fluid} alt="" className="img-fluid mx-auto" style={{ width: 540 }} />
}

export default OverviewBanner

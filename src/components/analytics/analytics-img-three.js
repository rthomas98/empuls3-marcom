import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const AnalyticsImgThree = () => {
  const data = useStaticQuery(graphql`
      query {
          analyticsImgThree: file(relativePath: { eq: "agency-img-three.png" }) {
              childImageSharp {
                  fluid(maxWidth: 547) {
                      ...GatsbyImageSharpFluid
                  }
              }
          }
      }
  `)

  return <Img fluid={data.analyticsImgThree.childImageSharp.fluid} alt="" className="img-fluid mx-auto mb-4" style={{ width: 547 }} />
}

export default AnalyticsImgThree

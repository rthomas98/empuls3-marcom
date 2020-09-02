import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const AnalyticsImgTwo = () => {
  const data = useStaticQuery(graphql`
      query {
          analyticsImgTwo: file(relativePath: { eq: "analytics-img-2.png" }) {
              childImageSharp {
                  fluid(maxWidth: 547) {
                      ...GatsbyImageSharpFluid
                  }
              }
          }
      }
  `)

  return <Img fluid={data.analyticsImgTwo.childImageSharp.fluid} alt="" className="img-fluid mx-auto" style={{ width: 547 }} />
}

export default AnalyticsImgTwo

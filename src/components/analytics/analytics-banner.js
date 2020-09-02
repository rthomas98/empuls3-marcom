import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const AnalyticsBanner = () => {
  const data = useStaticQuery(graphql`
      query {
          analyticsBanner: file(relativePath: { eq: "analytics-banner.png" }) {
              childImageSharp {
                  fluid(maxWidth: 829) {
                      ...GatsbyImageSharpFluid
                  }
              }
          }
      }
  `)

  return <Img fluid={data.analyticsBanner.childImageSharp.fluid} alt="" className="img-fluid" style={{ width: 600 }} />
}

export default AnalyticsBanner

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const AgencyImgSeven = () => {
  const data = useStaticQuery(graphql`
      query {
          agencyImgSeven: file(relativePath: { eq: "agency-img-seven.png" }) {
              childImageSharp {
                  fluid(maxWidth: 556) {
                      ...GatsbyImageSharpFluid
                  }
              }
          }
      }
  `)

  return <Img fluid={data.agencyImgSeven.childImageSharp.fluid} alt="" className="img-fluid mx-auto mb-4 rounded" style={{ width: 556 }} />
}

export default AgencyImgSeven

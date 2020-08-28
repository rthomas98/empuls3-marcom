import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const AgencyImgEight = () => {
  const data = useStaticQuery(graphql`
      query {
          agencyImgEight: file(relativePath: { eq: "agency-img-eight.png" }) {
              childImageSharp {
                  fluid(maxWidth: 556) {
                      ...GatsbyImageSharpFluid
                  }
              }
          }
      }
  `)

  return <Img fluid={data.agencyImgEight.childImageSharp.fluid} alt="" className="img-fluid mx-auto mb-4 rounded" style={{ width: 556 }} />
}

export default AgencyImgEight

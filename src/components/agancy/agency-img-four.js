import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const AgencyImgFour = () => {
  const data = useStaticQuery(graphql`
      query {
          agencyImgFour: file(relativePath: { eq: "agency-img-four.png" }) {
              childImageSharp {
                  fluid(maxWidth: 556) {
                      ...GatsbyImageSharpFluid
                  }
              }
          }
      }
  `)

  return <Img fluid={data.agencyImgFour.childImageSharp.fluid} alt="" className="img-fluid mx-auto mb-4 rounded" style={{ width: 556 }} />
}

export default AgencyImgFour

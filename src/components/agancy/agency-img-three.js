import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const AgencyImgThree = () => {
  const data = useStaticQuery(graphql`
      query {
          agencyImgThree: file(relativePath: { eq: "agency-img-three.png" }) {
              childImageSharp {
                  fluid(maxWidth: 556) {
                      ...GatsbyImageSharpFluid
                  }
              }
          }
      }
  `)

  return <Img fluid={data.agencyImgThree.childImageSharp.fluid} alt="" className="img-fluid mx-auto mb-4 rounded" style={{ width: 556 }} />
}

export default AgencyImgThree

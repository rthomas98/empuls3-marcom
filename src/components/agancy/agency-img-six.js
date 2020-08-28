import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const AgencyImgSix = () => {
  const data = useStaticQuery(graphql`
      query {
          agencyImgSix: file(relativePath: { eq: "agency-img-six.png" }) {
              childImageSharp {
                  fluid(maxWidth: 396) {
                      ...GatsbyImageSharpFluid
                  }
              }
          }
      }
  `)

  return <Img fluid={data.agencyImgSix.childImageSharp.fluid} alt="" className="img-fluid mx-auto" style={{ width: 350 }} />
}

export default AgencyImgSix

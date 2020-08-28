import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const AgencyImgFive = () => {
  const data = useStaticQuery(graphql`
      query {
          agencyImgFive: file(relativePath: { eq: "agency-img-five.png" }) {
              childImageSharp {
                  fluid(maxWidth: 573) {
                      ...GatsbyImageSharpFluid
                  }
              }
          }
      }
  `)

  return <Img fluid={data.agencyImgFive.childImageSharp.fluid} alt="" className="img-fluid mx-auto mb-4 rounded" style={{ width: 573 }} />
}

export default AgencyImgFive

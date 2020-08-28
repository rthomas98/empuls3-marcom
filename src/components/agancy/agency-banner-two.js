import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const AgencyBannerTwo = () => {
  const data = useStaticQuery(graphql`
      query {
          agencyBannerTwo: file(relativePath: { eq: "agency-img-two.png" }) {
              childImageSharp {
                  fluid(maxWidth: 814) {
                      ...GatsbyImageSharpFluid
                  }
              }
          }
      }
  `)

  return <Img fluid={data.agencyBannerTwo.childImageSharp.fluid} alt="" className="img-fluid mx-auto" style={{ width: 600 }} />
}

export default AgencyBannerTwo

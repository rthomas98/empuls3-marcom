import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const AgencyBanner = () => {
  const data = useStaticQuery(graphql`
      query {
          agencyBanner: file(relativePath: { eq: "agency-img-one.png" }) {
              childImageSharp {
                  fluid(maxWidth: 548) {
                      ...GatsbyImageSharpFluid
                  }
              }
          }
      }
  `)

  return <Img fluid={data.agencyBanner.childImageSharp.fluid} alt="" className="img-fluid mx-auto mb-4" style={{ width: 450 }} />
}

export default AgencyBanner

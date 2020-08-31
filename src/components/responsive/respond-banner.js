import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const RespondBanner = () => {
  const data = useStaticQuery(graphql`
      query {
          respondBanner: file(relativePath: { eq: "respond-banner.png" }) {
              childImageSharp {
                  fluid(maxWidth: 532) {
                      ...GatsbyImageSharpFluid
                  }
              }
          }
      }
  `)

  return <Img fluid={data.respondBanner.childImageSharp.fluid} alt="" className="img-fluid mx-auto rounded" style={{ width: 532 }} />
}

export default RespondBanner

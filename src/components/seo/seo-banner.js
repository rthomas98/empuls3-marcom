import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const SeoBanner = () => {
  const data = useStaticQuery(graphql`
      query {
          seoBanner: file(relativePath: { eq: "seo-banner.png" }) {
              childImageSharp {
                  fluid(maxWidth: 907) {
                      ...GatsbyImageSharpFluid
                  }
              }
          }
      }
  `)

  return <Img fluid={data.seoBanner.childImageSharp.fluid} alt="" className="img-fluid mx-auto" style={{ width: 907 }} />
}

export default SeoBanner

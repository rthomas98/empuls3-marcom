import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const SocialBanner = () => {
  const data = useStaticQuery(graphql`
      query {
          socialBanner: file(relativePath: { eq: "social-banner.png" }) {
              childImageSharp {
                  fluid(maxWidth: 719) {
                      ...GatsbyImageSharpFluid
                  }
              }
          }
      }
  `)

  return <Img fluid={data.socialBanner.childImageSharp.fluid} alt="" className="img-fluid mx-auto" style={{ width: 719 }} />
}

export default SocialBanner

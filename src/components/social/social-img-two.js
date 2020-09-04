import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const SocialImgTwo = () => {
  const data = useStaticQuery(graphql`
      query {
          socialImgTwo: file(relativePath: { eq: "social-img-two.png" }) {
              childImageSharp {
                  fluid(maxWidth: 766) {
                      ...GatsbyImageSharpFluid
                  }
              }
          }
      }
  `)

  return <Img fluid={data.socialImgTwo.childImageSharp.fluid} alt="" className="img-fluid mx-auto" style={{ width: 766 }} />
}

export default SocialImgTwo

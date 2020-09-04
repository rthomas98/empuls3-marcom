import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const SocialImgOne = () => {
  const data = useStaticQuery(graphql`
      query {
          socialImgOne: file(relativePath: { eq: "social-img-one.png" }) {
              childImageSharp {
                  fluid(maxWidth: 665) {
                      ...GatsbyImageSharpFluid
                  }
              }
          }
      }
  `)

  return <Img fluid={data.socialImgOne.childImageSharp.fluid} alt="" className="img-fluid mx-auto" style={{ width: 665 }} />
}

export default SocialImgOne

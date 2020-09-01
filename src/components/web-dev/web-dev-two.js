import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const WebImgTwo = () => {
  const data = useStaticQuery(graphql`
      query {
          webImgTwo: file(relativePath: { eq: "web-dev-two.png" }) {
              childImageSharp {
                  fluid(maxWidth: 604) {
                      ...GatsbyImageSharpFluid
                  }
              }
          }
      }
  `)

  return <Img fluid={data.webImgTwo.childImageSharp.fluid} alt="" className="img-fluid mx-auto" style={{ width: 500 }} />
}

export default WebImgTwo

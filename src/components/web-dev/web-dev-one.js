import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const WebImgOne = () => {
  const data = useStaticQuery(graphql`
      query {
          webImgOne: file(relativePath: { eq: "web-dev-one.png" }) {
              childImageSharp {
                  fluid(maxWidth: 533) {
                      ...GatsbyImageSharpFluid
                  }
              }
          }
      }
  `)

  return <Img fluid={data.webImgOne.childImageSharp.fluid} alt="" className="img-fluid mx-auto" style={{ width: 533 }} />
}

export default WebImgOne

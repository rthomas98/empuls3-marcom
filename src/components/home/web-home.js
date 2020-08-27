import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const WebHomeImg = () => {
  const data = useStaticQuery(graphql`
      query {
          webHomeImg: file(relativePath: { eq: "web-home.png" }) {
              childImageSharp {
                  fluid(maxWidth: 370) {
                      ...GatsbyImageSharpFluid
                  }
              }
          }
      }
  `)

  return <Img fluid={data.webHomeImg.childImageSharp.fluid} alt="" className="img-fluid mb-4 rounded" style={{ width: 370 }} />
}

export default WebHomeImg

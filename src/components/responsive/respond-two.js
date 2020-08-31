import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const RespondTwo = () => {
  const data = useStaticQuery(graphql`
      query {
          respondTwo: file(relativePath: { eq: "respond-two.png" }) {
              childImageSharp {
                  fluid(maxWidth: 1033) {
                      ...GatsbyImageSharpFluid
                  }
              }
          }
      }
  `)

  return <Img fluid={data.respondTwo.childImageSharp.fluid} alt="" className="img-fluid mx-auto" />
}

export default RespondTwo

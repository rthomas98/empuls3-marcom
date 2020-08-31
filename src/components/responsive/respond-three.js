import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const RespondThree = () => {
  const data = useStaticQuery(graphql`
      query {
          respondThree: file(relativePath: { eq: "respond-three.png" }) {
              childImageSharp {
                  fluid(maxWidth: 533) {
                      ...GatsbyImageSharpFluid
                  }
              }
          }
      }
  `)

  return <Img fluid={data.respondThree.childImageSharp.fluid} alt="" className="img-fluid mx-auto" style={{ width: 533 }} />
}

export default RespondThree

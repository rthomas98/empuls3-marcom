import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const UiFour = () => {
  const data = useStaticQuery(graphql`
      query {
          uiFour: file(relativePath: { eq: "ui-four.png" }) {
              childImageSharp {
                  fluid(maxWidth: 1170) {
                      ...GatsbyImageSharpFluid
                  }
              }
          }
      }
  `)

  return <Img fluid={data.uiFour.childImageSharp.fluid} alt="" className="img-fluid mx-auto" />
}

export default UiFour

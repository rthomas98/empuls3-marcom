import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const UiTwo = () => {
  const data = useStaticQuery(graphql`
      query {
          uiTwo: file(relativePath: { eq: "ui-two.png" }) {
              childImageSharp {
                  fluid(maxWidth: 533) {
                      ...GatsbyImageSharpFluid
                  }
              }
          }
      }
  `)

  return <Img fluid={data.uiTwo.childImageSharp.fluid} alt="" className="img-fluid mx-auto" />
}

export default UiTwo

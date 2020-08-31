import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const UiThree = () => {
  const data = useStaticQuery(graphql`
      query {
          uiThree: file(relativePath: { eq: "ui-three.png" }) {
              childImageSharp {
                  fluid(maxWidth: 533) {
                      ...GatsbyImageSharpFluid
                  }
              }
          }
      }
  `)

  return <Img fluid={data.uiThree.childImageSharp.fluid} alt="" className="img-fluid mx-auto" />
}

export default UiThree

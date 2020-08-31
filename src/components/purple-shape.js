import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const PurpleShape = () => {
  const data = useStaticQuery(graphql`
      query {
          purpleShape: file(relativePath: { eq: "purple-shape-img.png" }) {
              childImageSharp {
                  fluid(maxWidth: 665) {
                      ...GatsbyImageSharpFluid
                  }
              }
          }
      }
  `)

  return <Img fluid={data.purpleShape.childImageSharp.fluid} alt="" className="img-fluid mx-auto" />
}

export default PurpleShape

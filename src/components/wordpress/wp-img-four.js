import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const WpImgFour = () => {
  const data = useStaticQuery(graphql`
      query {
          wpImgFour: file(relativePath: { eq: "wp-img-four.png" }) {
              childImageSharp {
                  fluid(maxWidth: 570) {
                      ...GatsbyImageSharpFluid
                  }
              }
          }
      }
  `)

  return <Img fluid={data.wpImgFour.childImageSharp.fluid} alt="" className="img-fluid mx-auto mb-4" style={{ width: 570 }} />
}

export default WpImgFour

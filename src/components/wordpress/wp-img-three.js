import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const WpImgThree = () => {
  const data = useStaticQuery(graphql`
      query {
          wpImgThree: file(relativePath: { eq: "wp-img-three.png" }) {
              childImageSharp {
                  fluid(maxWidth: 570) {
                      ...GatsbyImageSharpFluid
                  }
              }
          }
      }
  `)

  return <Img fluid={data.wpImgThree.childImageSharp.fluid} alt="" className="img-fluid mx-auto mb-4" style={{ width: 570 }} />
}

export default WpImgThree

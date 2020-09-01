import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const WpImgSix = () => {
  const data = useStaticQuery(graphql`
      query {
          wpImgSix: file(relativePath: { eq: "wp-img-six.png" }) {
              childImageSharp {
                  fluid(maxWidth: 570) {
                      ...GatsbyImageSharpFluid
                  }
              }
          }
      }
  `)

  return <Img fluid={data.wpImgSix.childImageSharp.fluid} alt="" className="img-fluid mx-auto mb-4" style={{ width: 570 }} />
}

export default WpImgSix

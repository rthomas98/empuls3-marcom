import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const WpImgFive = () => {
  const data = useStaticQuery(graphql`
      query {
          wpImgFive: file(relativePath: { eq: "wp-img-five.png" }) {
              childImageSharp {
                  fluid(maxWidth: 570) {
                      ...GatsbyImageSharpFluid
                  }
              }
          }
      }
  `)

  return <Img fluid={data.wpImgFive.childImageSharp.fluid} alt="" className="img-fluid mx-auto mb-4" style={{ width: 570 }} />
}

export default WpImgFive

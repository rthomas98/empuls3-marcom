import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const WpImgTwo = () => {
  const data = useStaticQuery(graphql`
      query {
          wpImgTwo: file(relativePath: { eq: "wp-img-two.png" }) {
              childImageSharp {
                  fluid(maxWidth: 563) {
                      ...GatsbyImageSharpFluid
                  }
              }
          }
      }
  `)

  return <Img fluid={data.wpImgTwo.childImageSharp.fluid} alt="" className="img-fluid mx-auto" style={{ width: 563 }} />
}

export default WpImgTwo

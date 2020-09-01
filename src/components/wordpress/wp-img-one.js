import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const WpImgOne = () => {
  const data = useStaticQuery(graphql`
      query {
          wpImgOne: file(relativePath: { eq: "wp-img-one.png" }) {
              childImageSharp {
                  fluid(maxWidth: 428) {
                      ...GatsbyImageSharpFluid
                  }
              }
          }
      }
  `)

  return <Img fluid={data.wpImgOne.childImageSharp.fluid} alt="" className="img-fluid mx-auto" style={{ width: 428 }} />
}

export default WpImgOne

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const PpcImgTwo = () => {
  const data = useStaticQuery(graphql`
      query {
          ppcImgTwo: file(relativePath: { eq: "ppc-img-two.png" }) {
              childImageSharp {
                  fluid(maxWidth: 522) {
                      ...GatsbyImageSharpFluid
                  }
              }
          }
      }
  `)

  return <Img fluid={data.ppcImgTwo.childImageSharp.fluid} alt="" className="img-fluid mx-auto" style={{ width: 522 }} />
}

export default PpcImgTwo

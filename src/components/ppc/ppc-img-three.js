import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const PpcImgThree = () => {
  const data = useStaticQuery(graphql`
      query {
          ppcImgThree: file(relativePath: { eq: "ppc-img-four.png" }) {
              childImageSharp {
                  fluid(maxWidth: 585) {
                      ...GatsbyImageSharpFluid
                  }
              }
          }
      }
  `)

  return <Img fluid={data.ppcImgThree.childImageSharp.fluid} alt="" className="img-fluid mx-auto" style={{ width: 585 }} />
}

export default PpcImgThree

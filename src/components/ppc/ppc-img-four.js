import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const PpcImgFour = () => {
  const data = useStaticQuery(graphql`
      query {
          ppcImgFour: file(relativePath: { eq: "ppc-img-five.png" }) {
              childImageSharp {
                  fluid(maxWidth: 585) {
                      ...GatsbyImageSharpFluid
                  }
              }
          }
      }
  `)

  return <Img fluid={data.ppcImgFour.childImageSharp.fluid} alt="" className="img-fluid mx-auto" style={{ width: 585 }} />
}

export default PpcImgFour

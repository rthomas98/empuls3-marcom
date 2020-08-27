import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const PpcHomeImg = () => {
  const data = useStaticQuery(graphql`
      query {
          ppcHomeImg: file(relativePath: { eq: "ppc-home.png" }) {
              childImageSharp {
                  fluid(maxWidth: 370) {
                      ...GatsbyImageSharpFluid
                  }
              }
          }
      }
  `)

  return <Img fluid={data.ppcHomeImg.childImageSharp.fluid} alt="" className="img-fluid mb-4 rounded" style={{ width: 370 }} />
}

export default PpcHomeImg

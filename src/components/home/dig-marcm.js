import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const DigiImg = () => {
  const data = useStaticQuery(graphql`
      query {
          digiImg: file(relativePath: { eq: "dm-img.png" }) {
              childImageSharp {
                  fluid(maxWidth: 1170) {
                      ...GatsbyImageSharpFluid
                  }
              }
          }
      }
  `)

  return <Img fluid={data.digiImg.childImageSharp.fluid} alt="" className="img-fluid" />
}

export default DigiImg

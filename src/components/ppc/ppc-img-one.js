import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const PpcImgOne = () => {
  const data = useStaticQuery(graphql`
      query {
          ppcImgOne: file(relativePath: { eq: "ppc-img-six.png" }) {
              childImageSharp {
                  fluid(maxWidth: 522) {
                      ...GatsbyImageSharpFluid
                  }
              }
          }
      }
  `)

  return <Img fluid={data.ppcImgOne.childImageSharp.fluid} alt="" className="img-fluid mx-auto" style={{ width: 522 }} />
}

export default PpcImgOne

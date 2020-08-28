import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const BrandImgOne = () => {
  const data = useStaticQuery(graphql`
      query {
          brandImgOne: file(relativePath: { eq: "brand-img-one.png" }) {
              childImageSharp {
                  fluid(maxWidth: 500) {
                      ...GatsbyImageSharpFluid
                  }
              }
          }
      }
  `)

  return <Img fluid={data.brandImgOne.childImageSharp.fluid} alt="" className="img-fluid mx-auto rounded" style={{ width: 500 }} />
}

export default BrandImgOne

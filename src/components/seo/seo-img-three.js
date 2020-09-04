import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const SeoImgThree = () => {
  const data = useStaticQuery(graphql`
      query {
          seoImgThree: file(relativePath: { eq: "seo-img-three.png" }) {
              childImageSharp {
                  fluid(maxWidth: 1170) {
                      ...GatsbyImageSharpFluid
                  }
              }
          }
      }
  `)

  return <Img fluid={data.seoImgThree.childImageSharp.fluid} alt="" className="img-fluid mx-auto" />
}

export default SeoImgThree

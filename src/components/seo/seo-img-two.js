import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const SeoImgTwo = () => {
  const data = useStaticQuery(graphql`
      query {
          seoImgTwo: file(relativePath: { eq: "seo-img-two.png" }) {
              childImageSharp {
                  fluid(maxWidth: 522) {
                      ...GatsbyImageSharpFluid
                  }
              }
          }
      }
  `)

  return <Img fluid={data.seoImgTwo.childImageSharp.fluid} alt="" className="img-fluid mx-auto" />
}

export default SeoImgTwo

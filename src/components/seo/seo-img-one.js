import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const SeoImgOne = () => {
  const data = useStaticQuery(graphql`
      query {
          seoImgOne: file(relativePath: { eq: "seo-img-one.png" }) {
              childImageSharp {
                  fluid(maxWidth: 522) {
                      ...GatsbyImageSharpFluid
                  }
              }
          }
      }
  `)

  return <Img fluid={data.seoImgOne.childImageSharp.fluid} alt="" className="img-fluid mx-auto" style={{ width: 522 }} />
}

export default SeoImgOne

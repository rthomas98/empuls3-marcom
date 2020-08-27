import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const SeoHomeImg = () => {
  const data = useStaticQuery(graphql`
      query {
          seoHomeImg: file(relativePath: { eq: "seo-home.png" }) {
              childImageSharp {
                  fluid(maxWidth: 370) {
                      ...GatsbyImageSharpFluid
                  }
              }
          }
      }
  `)

  return <Img fluid={data.seoHomeImg.childImageSharp.fluid} alt="" className="img-fluid mb-4 rounded" style={{ width: 370 }} />
}

export default SeoHomeImg

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const CtaWorkImg = () => {
  const data = useStaticQuery(graphql`
      query {
          ctaWorkImg: file(relativePath: { eq: "work-cta-im.png" }) {
              childImageSharp {
                  fluid(maxWidth: 623) {
                      ...GatsbyImageSharpFluid
                  }
              }
          }
      }
  `)

  return <Img fluid={data.ctaWorkImg.childImageSharp.fluid} alt="" className="img-fluid mx-auto" style={{ width: 400 }} />
}

export default CtaWorkImg

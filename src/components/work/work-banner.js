import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const WorkBannerImg = () => {
  const data = useStaticQuery(graphql`
      query {
          workBannerImg: file(relativePath: { eq: "work-banner-img.png" }) {
              childImageSharp {
                  fluid(maxWidth: 868) {
                      ...GatsbyImageSharpFluid
                  }
              }
          }
      }
  `)

  return <Img fluid={data.workBannerImg.childImageSharp.fluid} alt="" className="img-fluid mx-auto" style={{ width: 800 }} />
}

export default WorkBannerImg

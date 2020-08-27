import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const BannerImg = () => {
  const data = useStaticQuery(graphql`
      query {
          bannerImg: file(relativePath: { eq: "home-banner-img.png" }) {
              childImageSharp {
                  fluid(maxWidth: 858) {
                      ...GatsbyImageSharpFluid
                  }
              }
          }
      }
  `)

  return <Img fluid={data.bannerImg.childImageSharp.fluid} alt="" className="img-fluid" style={{ width: 600 }} />
}

export default BannerImg

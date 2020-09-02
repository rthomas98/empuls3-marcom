import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const OverviewImgThree = () => {
  const data = useStaticQuery(graphql`
      query {
          overviewImgThree: file(relativePath: { eq: "overview-img-three.png" }) {
              childImageSharp {
                  fluid(maxWidth: 780) {
                      ...GatsbyImageSharpFluid
                  }
              }
          }
      }
  `)

  return <Img fluid={data.overviewImgThree.childImageSharp.fluid} alt="" className="img-fluid mx-auto"  />
}

export default OverviewImgThree

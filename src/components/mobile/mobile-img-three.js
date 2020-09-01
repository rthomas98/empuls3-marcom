import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const MobileImgThree = () => {
  const data = useStaticQuery(graphql`
      query {
          mobileImgThree: file(relativePath: { eq: "mobile-img-three.png" }) {
              childImageSharp {
                  fluid(maxWidth: 366) {
                      ...GatsbyImageSharpFluid
                  }
              }
          }
      }
  `)

  return <Img fluid={data.mobileImgThree.childImageSharp.fluid} alt="" className="img-fluid mx-auto" style={{ width: 366 }} />
}

export default MobileImgThree

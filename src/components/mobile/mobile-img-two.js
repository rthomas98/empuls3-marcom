import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const MobileImgTwo = () => {
  const data = useStaticQuery(graphql`
      query {
          mobileImgTwo: file(relativePath: { eq: "mobile-img-two.png" }) {
              childImageSharp {
                  fluid(maxWidth: 366) {
                      ...GatsbyImageSharpFluid
                  }
              }
          }
      }
  `)

  return <Img fluid={data.mobileImgTwo.childImageSharp.fluid} alt="" className="img-fluid mx-auto" style={{ width: 366 }} />
}

export default MobileImgTwo

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const MobileImgOne = () => {
  const data = useStaticQuery(graphql`
      query {
          mobileImgOne: file(relativePath: { eq: "mobile-img-one.png" }) {
              childImageSharp {
                  fluid(maxWidth: 528) {
                      ...GatsbyImageSharpFluid
                  }
              }
          }
      }
  `)

  return <Img fluid={data.mobileImgOne.childImageSharp.fluid} alt="" className="img-fluid mx-auto" style={{ width: 528 }} />
}

export default MobileImgOne

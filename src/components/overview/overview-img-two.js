import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const OverviewImgTwo = () => {
  const data = useStaticQuery(graphql`
      query {
          overviewImgTwo: file(relativePath: { eq: "overview-img-two.png" }) {
              childImageSharp {
                  fluid(maxWidth: 547) {
                      ...GatsbyImageSharpFluid
                  }
              }
          }
      }
  `)

  return <Img fluid={data.overviewImgTwo.childImageSharp.fluid} alt="" className="img-fluid mx-auto" style={{ width: 547 }} />
}

export default OverviewImgTwo

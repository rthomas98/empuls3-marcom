import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const OverviewImgOne = () => {
  const data = useStaticQuery(graphql`
      query {
          overviewImgOne: file(relativePath: { eq: "overview-img-one.png" }) {
              childImageSharp {
                  fluid(maxWidth: 553) {
                      ...GatsbyImageSharpFluid
                  }
              }
          }
      }
  `)

  return <Img fluid={data.overviewImgOne.childImageSharp.fluid} alt="" className="img-fluid mx-auto" style={{ width: 553 }} />
}

export default OverviewImgOne

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const RightGrey = () => {
  const data = useStaticQuery(graphql`
      query {
          rightGrey: file(relativePath: { eq: "right-grey.png" }) {
              childImageSharp {
                  fluid(maxWidth: 876) {
                      ...GatsbyImageSharpFluid
                  }
              }
          }
      }
  `)

  return <Img fluid={data.rightGrey.childImageSharp.fluid} alt="" className="img-fluid right-grey" />
}

export default RightGrey

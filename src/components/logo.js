import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Logo = () => {
  const data = useStaticQuery(graphql`
    query {
      logoImg: file(relativePath: { eq: "logo-icon.png" }) {
        childImageSharp {
          fluid(maxWidth: 201) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return <Img fluid={data.logoImg.childImageSharp.fluid} alt="" className="d-inline-block align-top" style={{ width: 30 }} />
}

export default Logo
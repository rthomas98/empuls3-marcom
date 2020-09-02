import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const EmailImgThree = () => {
  const data = useStaticQuery(graphql`
      query {
          emailImgThree: file(relativePath: { eq: "email-banner-three.png" }) {
              childImageSharp {
                  fluid(maxWidth: 571) {
                      ...GatsbyImageSharpFluid
                  }
              }
          }
      }
  `)

  return <Img fluid={data.emailImgThree.childImageSharp.fluid} alt="" className="img-fluid mx-auto" style={{ width: 571 }} />
}

export default EmailImgThree

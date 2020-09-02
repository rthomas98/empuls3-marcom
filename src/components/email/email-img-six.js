import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const EmailImgSix = () => {
  const data = useStaticQuery(graphql`
      query {
          emailImgSix: file(relativePath: { eq: "email-img-five.jpg" }) {
              childImageSharp {
                  fluid(maxWidth: 1170) {
                      ...GatsbyImageSharpFluid
                  }
              }
          }
      }
  `)

  return <Img fluid={data.emailImgSix.childImageSharp.fluid} alt="" className="img-fluid mx-auto" />
}

export default EmailImgSix

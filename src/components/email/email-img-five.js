import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const EmailImgFive = () => {
  const data = useStaticQuery(graphql`
      query {
          emailImgFive: file(relativePath: { eq: "email-img-four.png" }) {
              childImageSharp {
                  fluid(maxWidth: 570) {
                      ...GatsbyImageSharpFluid
                  }
              }
          }
      }
  `)

  return <Img fluid={data.emailImgFive.childImageSharp.fluid} alt="" className="img-fluid mx-auto mb-4" style={{ width: 570 }} />
}

export default EmailImgFive

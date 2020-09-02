import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const EmailImgTwo = () => {
  const data = useStaticQuery(graphql`
      query {
          emailImgTwo: file(relativePath: { eq: "email-banner-two.png" }) {
              childImageSharp {
                  fluid(maxWidth: 522) {
                      ...GatsbyImageSharpFluid
                  }
              }
          }
      }
  `)

  return <Img fluid={data.emailImgTwo.childImageSharp.fluid} alt="" className="img-fluid mx-auto" style={{ width: 522 }} />
}

export default EmailImgTwo

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const EmailBanner = () => {
  const data = useStaticQuery(graphql`
      query {
          emailBanner: file(relativePath: { eq: "email-banner.png" }) {
              childImageSharp {
                  fluid(maxWidth: 876) {
                      ...GatsbyImageSharpFluid
                  }
              }
          }
      }
  `)

  return <Img fluid={data.emailBanner.childImageSharp.fluid} alt="" className="img-fluid mx-auto" style={{ width: 876 }} />
}

export default EmailBanner

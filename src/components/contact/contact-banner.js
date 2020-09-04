import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const ContactBanner = () => {
  const data = useStaticQuery(graphql`
      query {
          contactBanner: file(relativePath: { eq: "contact-banner.png" }) {
              childImageSharp {
                  fluid(maxWidth: 821) {
                      ...GatsbyImageSharpFluid
                  }
              }
          }
      }
  `)

  return <Img fluid={data.contactBanner.childImageSharp.fluid} alt="" className="img-fluid mx-auto" style={{ width: 821 }} />
}

export default ContactBanner

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const FooterImage = () => {
  const data = useStaticQuery(graphql`
    query {
      footerImage: file(relativePath: { eq: "footer-img.png" }) {
        childImageSharp {
          fluid(maxWidth: 673) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return <Img fluid={data.footerImage.childImageSharp.fluid} alt="Man in a chair on a laptop" className="img-fluid" />
}

export default FooterImage

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const TestimonialsImg = () => {
  const data = useStaticQuery(graphql`
      query {
          testimonialsImg: file(relativePath: { eq: "testimonal-img.png" }) {
              childImageSharp {
                  fluid(maxWidth: 632) {
                      ...GatsbyImageSharpFluid
                  }
              }
          }
      }
  `)

  return <Img fluid={data.testimonialsImg.childImageSharp.fluid} alt="" className="img-fluid mx-auto" style={{ width: 423 }} />
}

export default TestimonialsImg

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const PeopleImg = () => {
  const data = useStaticQuery(graphql`
      query {
          peopleImg: file(relativePath: { eq: "home-people.png" }) {
              childImageSharp {
                  fluid(maxWidth: 676) {
                      ...GatsbyImageSharpFluid
                  }
              }
          }
      }
  `)

  return <Img fluid={data.peopleImg.childImageSharp.fluid} alt="" className="img-fluid" style={{ width: 676 }} />
}

export default PeopleImg

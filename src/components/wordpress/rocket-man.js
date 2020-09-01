import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const RocketMan = () => {
  const data = useStaticQuery(graphql`
      query {
          rocketMan: file(relativePath: { eq: "rocket-man.png" }) {
              childImageSharp {
                  fluid(maxWidth: 451) {
                      ...GatsbyImageSharpFluid
                  }
              }
          }
      }
  `)

  return <Img fluid={data.rocketMan.childImageSharp.fluid} alt="" className="img-fluid mx-auto" style={{ width: 451 }} />
}

export default RocketMan

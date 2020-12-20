import tw from "twin.macro"

import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

const Dog = () => {
  const data = useStaticQuery(
    graphql`
      query {
        dog: file(relativePath: { eq: "dog.jpeg" }) {
          childImageSharp {
            fluid(quality: 100, maxWidth: 1000, maxHeight: 1000) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `
  )

  const dogPic = data.dog.childImageSharp.fluid

  return (
    <div>
      <Img
        imgStyle={{ marginTop: 0 }}
        css={[
          tw`w-40 h-40`,
          tw`rounded-full justify-center ring-4 ring-offset-4 w-40 mb-8`,
        ]}
        fluid={dogPic}
      />
    </div>
  )
}

export default Dog

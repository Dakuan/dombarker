import tw, { styled } from "twin.macro"

import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

import BackgroundImage from "gatsby-background-image"

const BackgroundSection = ({ className }) => {
  const data = useStaticQuery(
    graphql`
      query {
        dom: file(relativePath: { eq: "dom.png" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 100) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        header: file(relativePath: { eq: "header.jpg" }) {
          childImageSharp {
            fluid(quality: 100, maxWidth: 1280) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `
  )

  // Set ImageData.
  const imageData = data.header.childImageSharp.fluid
  const domPic = data.dom.childImageSharp.fluid

  return (
    <div tw="flex flex-col items-center w-full mb-10">
      <BackgroundImage
        tw="h-40"
        className={className}
        fluid={imageData}
      />
      <div>
        <Img
          css={[
            tw`rounded-full justify-center ring-4 ring-offset-4 w-40`,
            `margin-top: -50%;`,
          ]}
          fluid={domPic}
        />
      </div>
    </div>
  )
}

const Image = styled(BackgroundSection)`
  width: 100%;
  background-position: center center;
  background-repeat: repeat-y;
  background-size: cover;
`

// export default () => <div tw="bg-red-300 w-full h-16">hi</div>
export default Image

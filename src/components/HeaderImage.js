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
            fluid(quality: 90, maxWidth: 1920) {
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
    <>
      <BackgroundImage
        Tag="section"
        className={className}
        fluid={imageData}
        backgroundColor={`#040e18`}
      ></BackgroundImage>
      <div>
        <Img
          css={[
            tw`rounded-full justify-center ring-4 ring-offset-4 w-40`,
            // `width: 150px;`,
            `margin-top: -50%;`,
          ]}
          fluid={domPic}
        />
      </div>
    </>
  )
}

const Image = styled(BackgroundSection)`
  width: 100%;
  height: 30vh;
  background-position: center center;
  background-repeat: repeat-y;
  background-size: cover;
`

export default Image

import tw from "twin.macro"
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

  const imageData = data.header.childImageSharp.fluid
  const domPic = data.dom.childImageSharp.fluid

  return (
    <div tw="flex flex-col items-center w-full mb-10 bg-center">
      <BackgroundImage
        tw="md:h-44 h-40 w-full"
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

export default BackgroundSection

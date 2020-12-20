import React from "react"
import tw from "twin.macro"

const date = new Date()
const Footer = () => (
  <span css={[tw`mb-4`]}>{`© Dom Barker ${date.getFullYear()}`}</span>
)

export default Footer

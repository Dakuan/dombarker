import React from "react"
import tw from "twin.macro"

const Title = ({ children, rest }) => (
  <h1 css={[tw`font-serif`]} {...rest}>
    {children}
  </h1>
)

export default Title

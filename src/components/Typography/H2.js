import React from "react"
import tw from "twin.macro"

const H2 = ({ children, rest }) => (
  <h2 css={[tw`font-serif`]} {...rest}>
    {children}
  </h2>
)

export default H2

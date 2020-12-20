import React from "react"
import tw from "twin.macro"

const P = ({ children, rest }) => (
  <p css={[tw`font-sans leading-relaxed text-justify`]} {...rest}>
    {children}
  </p>
)

export default P

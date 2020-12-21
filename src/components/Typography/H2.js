import React from "react"
import tw from "twin.macro"

const H2 = ({ children, ...rest }) => (
  <h2 css={[tw`font-serif mb-4 mt-8 text-2xl font-bold`]} {...rest}>
    {children}
  </h2>
)

export default H2

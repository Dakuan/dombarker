import React from "react"
import tw from "twin.macro"

// ont-weight: 700;
//     font-size: 1.5em;
//     margin-top: 2em;
//     margin-bottom: 1em;
//     line-height: 1.3333333;

const H2 = ({ children, ...rest }) => (
  <h2 css={[tw`font-serif mb-6 mt-12 text-2xl font-bold`]} {...rest}>
    {children}
  </h2>
)

export default H2

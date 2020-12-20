import React from "react"
import tw from "twin.macro"

const Link = ({ children, ...rest }) => {
  const { css = [] } = rest
  return (
    <a
      css={[tw`font-sans underline text-blue-500 hover:text-blue-800`, ...css]}
      {...rest}
    >
      {children}
    </a>
  )
}

export default Link

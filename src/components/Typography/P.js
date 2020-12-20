import React from "react"
import tw from "twin.macro"

const P = ({ children, ...rest }) => {
  const { css = [] } = rest
  return (
    <p
      css={[tw`font-sans leading-relaxed text-justify my-5`, ...css]}
      {...rest}
    >
      {children}
    </p>
  )
}

export default P

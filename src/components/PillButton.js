import React from "react"
import tw from "twin.macro"

const PillButton = ({ children, ...rest }) => {
  return (
    <a
      {...rest}
      css={[
        tw`rounded-full border border-gray-900`,
        tw`py-1 px-3`,
        tw`no-underline`,
        tw`transition-all duration-300`,
        tw`hover:bg-gray-900 hover:text-white`,
      ]}
    >
      {children}
    </a>
  )
}

export default PillButton

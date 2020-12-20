import React from 'react'
import tw from "twin.macro"

const projectTypeStyle = {
  finance: tw`bg-emerald-400`,
  media: tw`bg-pink-400`,
  publishing: tw`bg-red-400`,
  mixed: tw`bg-gradient-to-r from-purple-400 via-pink-400 to-red-400`,
}

const TypeLabel = ({ type }) => {
  return (
    <span
      css={[
        tw`ml-auto px-2 py-1 w-20`,
        tw`text-white text-sm`,
        tw`bg-indigo-400 border rounded-sm self-start`,
        projectTypeStyle[type],
      ]}
    >
      {type}
    </span>
  )
}

export default TypeLabel
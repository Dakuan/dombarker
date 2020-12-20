import React from "react"
import tw from "twin.macro"

const Tech = ({ tech, setSelectedTech, selectedTech }) => {
  const isSelected = selectedTech === tech
  return (
    <button
      tabIndex={0}
      onClick={() => setSelectedTech(isSelected ? null : tech)}
      css={[
        tw`px-3 py-1 border text-xs border-gray-900 rounded-full mt-3 transition-all cursor-pointer focus:outline-none hover:bg-gray-200 duration-300 hover:animate-pulse`,
        isSelected ? tw`bg-gray-900 text-white hover:bg-gray-900` : "",
      ]}
    >
      {tech}
    </button>
  )
}

export default Tech

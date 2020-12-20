import React from 'react'
import tw from 'twin.macro'

const Tech = ({ tech, setSelectedTech, selectedTech }) => {
  const isSelected = selectedTech === tech
  return (
    <button
      tabIndex={0}
      onClick={() => setSelectedTech(isSelected ? null : tech)}
      css={[
        tw`px-3 py-1 border text-xs border-gray-900 rounded-full mt-3 transition-all cursor-pointer hover:bg-gray-200 duration-300`,
        isSelected
          ? tw`bg-gray-900 text-white hover:bg-gray-900 animate-pulse`
          : "",
      ]}
    >
      {tech}
    </button>
  )
}

export default Tech;
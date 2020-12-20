import React from "react"
import tw from "twin.macro"

import Tech from "./Tech"
import TypeLabel from "./TypeLabel"

const Project = ({
  role,
  company,
  tech,
  type,
  text,
  setSelectedTech,
  selectedTech,
}) => {
  return (
    <div tw="bg-gray-50 border-gray-200 border w-full max-w-2xl rounded-sm mb-8 shadow-md mx-auto">
      <div tw="p-3 text-lg border-b bg-gray-100 text-gray-700 flex">
        <span tw="font-semibold text-left">{`${role} at ${company}`}</span>
        <TypeLabel type={type} />
      </div>
      {/* {text && <div css={[tw`bg-white border-b text-left p-3`]}>{text}</div>} */}

      <div css={[tw`flex flex-row space-x-2 flex-wrap p-3 pt-0`]}>
        {tech.sort().map(t => (
          <Tech
            key={t}
            tech={t}
            selectedTech={selectedTech}
            setSelectedTech={setSelectedTech}
          />
        ))}
      </div>
    </div>
  )
}

export default Project

import React from "react"
import tw from "twin.macro"

import Project from "./Project"

const Projects = ({ projects, selectedTech, setSelectedTech }) => (
  <div css={[tw`w-full flex flex-wrap mb-4 mt-4`]}>
    {projects.map(p => (
      <Project
        key={p.id}
        {...p}
        selectedTech={selectedTech}
        setSelectedTech={setSelectedTech}
      />
    ))}
  </div>
)

export default Projects

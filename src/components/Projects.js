import React, { useState } from "react"
import tw, { styled } from "twin.macro"

const projectTypeStyle = {
  finance: tw`bg-emerald-400`,
  media: tw`bg-pink-400`,
  publishing: tw`bg-red-400`,
  mixed: tw`bg-gradient-to-r from-purple-400 via-pink-400 to-red-400`,

}

const projectsData = [
  {
    role: "CTO",
    company: "Fluidly",
    type: "finance",
    tech: ["kubernetes", "reactjs", "nodejs", "redis", "postgres", "GCP"],
  },
  {
    role: "CTO",
    company: "Metalhub",
    type: "retail",
    tech: ["heroku", "ruby", "postgres", "reactjs"],
  },
  {
    role: "VP Engineering",
    company: "Quill Content / Jellyfish",
    type: "media",
    tech: ["kubernetes", "reactjs", "nodejs", "mysql", "GCP"],
  },
  {
    role: "Consultant",
    company: "Jigsaw.xyz",
    type: "finance",
    tech: ["kubernetes", "react native", "nodejs", "postgres", "GCP"],
  },
  {
    role: "Tech Lead",
    company: "Which?",
    type: "publishing",
    tech: ["ruby", "reactjs"],
  },
  {
    role: "Tech Lead",
    company: "OpenXO",
    type: "media",
    tech: ["ruby", "reactjs", "backbonejs", "nodejs"],
  },
  {
    role: "Engineer",
    company: "Unomee",
    type: "mixed",
    tech: ["ruby", ".net", "backbonejs", "heroku"],
  },
  {
    role: "Engineer",
    company: "Earthware",
    type: "mixed",
    tech: [".net", "backbonejs", "azure"],
  },
]

const Tech = ({ tech, setSelectedTech, selectedTech }) => {
  const isSelected = selectedTech === tech
  return (
    <div
      onClick={() => setSelectedTech(isSelected ? null : tech)}
      css={[
        tw`px-3 py-1 border text-xs border-gray-900  rounded-full mt-3 transition-all cursor-pointer`,
        isSelected ? tw`bg-gray-900 text-white` : "",
      ]}
    >
      {tech}
    </div>
  )
}

const Project = ({
  role,
  company,
  tech,
  type,
  setSelectedTech,
  selectedTech,
}) => {
  return (
    <div tw="bg-gray-50 border-gray-200 border w-full max-w-2xl rounded-sm mb-8 shadow-md mx-auto">
      <div tw="p-3 text-lg border-b bg-gray-100 text-gray-700 flex">
        <span tw="font-semibold text-left">{`${role} at ${company}`}</span>
        <span
          css={[
            tw`ml-auto bg-indigo-400 border rounded-sm text-white text-sm px-2 py-1 w-20 self-start`,
            projectTypeStyle[type],
          ]}
        >
          {type}
        </span>
      </div>
      {/* <div css={[tw`bg-white border-b text-left p-3`]}>
        I joined Jigsaw to help them transition from being a project based
        consultancy to an internal product based company. I advised on the
        architectural design of an Open Banking driven platform that enables
        individuals and small businesses to leverage their own data, rather than
        be exploited by it. I helped the team move from a ‘Big Design Upfront’
        process to a ‘Hypothesis Based’ one, with a rapid Build-Measure-Learn
        loop.
      </div> */}
      <div css={[tw`flex flex-row space-x-2 flex-wrap p-3 pt-0`]}>
        {tech.sort().map(t => (
          <Tech
            tech={t}
            selectedTech={selectedTech}
            setSelectedTech={setSelectedTech}
          />
        ))}
      </div>
    </div>
  )
}

const Projects = ({ projects = projectsData }) => {
  const [selectedTech, setSelectedTech] = useState()
  return (
    <div tw="w-full flex flex-wrap">
      {projects.map(p => (
        <Project
          {...p}
          selectedTech={selectedTech}
          setSelectedTech={setSelectedTech}
        />
      ))}
    </div>
  )
}

export default Projects

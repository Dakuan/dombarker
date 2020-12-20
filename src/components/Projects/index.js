import React, { useState } from "react"
import { graphql, useStaticQuery } from "gatsby"

import Projects from "./Projects"

const ProjectsContainer = () => {
  const data = useStaticQuery(
    graphql`
      query {
        projects: allProjectsJson {
          edges {
            node {
              company
              id
              role
              type
              text
              tech
            }
          }
        }
      }
    `
  )
  const projects = data.projects.edges.map(e => e.node)
  const [selectedTech, setSelectedTech] = useState()
  return (
    <Projects
      projects={projects}
      selectedTech={selectedTech}
      setSelectedTech={setSelectedTech}
    />
  )
}

export default ProjectsContainer

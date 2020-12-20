import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import Links from "./Links"

const LinksContainer = () => {
  const data = useStaticQuery(
    graphql`
      query {
        links: allLinksJson {
          edges {
            node {
              id
              title
              url
            }
          }
        }
      }
    `
  )
  const links = data.links.edges.map(e => e.node)
  return <Links links={links} />
}

export default LinksContainer

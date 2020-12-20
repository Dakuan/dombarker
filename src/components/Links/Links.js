import React from "react"

import Link from "./Link"

const Links = ({ links = [] }) => {
  return links.map(link => <Link key={link.id} {...link} />)
}

export default Links

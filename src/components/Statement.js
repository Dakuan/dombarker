import React from "react"
import { MDXProvider } from "@mdx-js/react"

import { P, Link } from "./Typography"
import Content from "../content/statement.mdx"

const components = {
  p: P,
  a: Link,
}

const Statement = ({ content }) => {
  return (
    <MDXProvider components={components}>
      <Content />
    </MDXProvider>
  )
}

export default Statement

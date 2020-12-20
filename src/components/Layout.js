import React from "react"
import { GlobalStyles } from "twin.macro"
import SEO from "./SEO"

const Layout = ({ children, ...rest }) => (
  <div {...rest}>
    <SEO />
    <GlobalStyles />
    {children}
  </div>
)

export default Layout

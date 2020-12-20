import React from "react"
import { GlobalStyles } from "twin.macro"

import SEO from "./SEO"
import Footer from "./Footer"

const Layout = ({ children, ...rest }) => (
  <div {...rest}>
    <SEO />
    <GlobalStyles />
    {children}
    <Footer />
  </div>
)

export default Layout

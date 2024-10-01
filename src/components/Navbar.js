import React from "react"
import tw from "twin.macro"

import PillButton from "./PillButton"

const NavBar = () => (
  <div
    css={[
      tw`flex justify-center space-x-4 border-b border-t border-gray-900 py-4 mb-4`,
    ]}
  >
    <PillButton href="#articles">Articles</PillButton>
    <PillButton href="#projects">Projects</PillButton>
    <PillButton href="https://photos.dombarker.co.uk">Photography</PillButton>
  </div>
)

export default NavBar

import React from "react"
import tw from "twin.macro"

import { Link as A } from "../Typography"

const Link = ({ title, url, icon }) => (
  <span>
    <span css={[tw`text-xl mr-1`]}>{icon}</span>
    <A href={url}>{title}</A>
  </span>
)

export default Link

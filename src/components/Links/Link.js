import React from "react"
import { Link as A } from "../Typography"

const Link = ({ title, url, icon }) => (
  <span>
    {icon}
    <A href={url}>{title}</A>
  </span>
)

export default Link

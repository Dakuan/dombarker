import React from "react"
import { Link as A } from "../Typography"

const Link = ({ title, url }) => <A href={url}>{title}</A>

export default Link

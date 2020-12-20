import React from "react"
import tw from "twin.macro"
import {
  Layout,
  HeaderImage,
  Projects,
  Typography,
  Links,
  Navbar,
  Statement,
} from "../components"

const { Title, H2 } = Typography

const App = () => (
  <Layout
    css={[
      tw`flex flex-col items-center justify-center`,
      tw`text-center font-sans`,
    ]}
  >
    <HeaderImage />
    <div css={[tw`flex flex-col justify-center h-full container mx-auto`]}>
      <Title>Dom Barker</Title>
      <Navbar />
      <Statement />
      <H2 id="articles">Articles & Interviews</H2>
      <Links />
      <H2 id="projects">Previous Projects</H2>
      <Projects />
      <Navbar />
    </div>
  </Layout>
)

export default App

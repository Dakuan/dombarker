import React from "react"
import tw from "twin.macro"
import { Layout, HeaderImage, Projects, Typography } from "../components"

const { Title, P, H2 } = Typography

const App = () => (
  <Layout
    css={[
      tw`flex flex-col items-center justify-center`,
      tw`text-center font-sans`,
    ]}
  >
    <HeaderImage />
    <div
      css={[
        tw`flex flex-col justify-center h-full container mx-auto`,
        tw`prose`,
      ]}
    >
      <Title>Dom Barker</Title>
      <P>
        Highly capable technology leader and experienced software engineer who
        is equally happy dealing with people or computers. I build high
        performing teams and give smart people the environment they need to do
        their best work. I am an effective communicator and am comfortable with
        internal, customer, board or investor interactions. I specialise in
        early stage startups and have a wealth of experience of rapid
        development under pressure and managing the trade offs that come with
        it.
      </P>
      <P>
        I'm currently CTO at <a href="https://chirpbirding.com">Chirp</a>{" "}
        where I'm working on encouraging people to engage more with the natural
        world. I'm hoping that if people appricate the critters that dwindle
        while they surround us then perhaps they might make different choices
        about how they treat our environment.
      </P>
      <P>
        If you'd like to get in touch feel free to{" "}
        <a href="mailto:dom@dombarker.co.uk">email me</a>.
      </P>
      <H2>Previous Projects</H2>
      <Projects />
    </div>
  </Layout>
)

export default App

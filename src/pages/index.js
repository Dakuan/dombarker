import React from "react"
import tw, { styled } from "twin.macro"
import { Button, Logo, Layout, HeaderImage, Projects } from "../components"

const Title = styled.h1(() => [tw`font-serif`])

const H2 = styled.h2(() => [tw`font-serif`])

const Para = styled.p(() => [tw`font-sans leading-relaxed text-justify`])

const Link = ({ href, children }) => <a href={href}>{children}</a>

const App = () => (
  <Layout
    css={[
      tw`flex flex-col items-center justify-center`,
      tw`text-center font-sans`,
    ]}
  >
    <HeaderImage />
    <div tw="flex flex-col justify-center h-full container mx-auto prose">
      <Title>Dom Barker</Title>
      <Para>
        Highly capable technology leader and experienced software engineer who
        is equally happy dealing with people or computers. I build high
        performing teams and give smart people the environment they need to do
        their best work. I am an effective communicator and am comfortable with
        internal, customer, board or investor interactions. I specialise in
        early stage startups and have a wealth of experience of rapid
        development under pressure and managing the trade offs that come with
        it.
      </Para>
      <Para>
      I'm currently CTO at{" "}
        <Link href="https://chirpbirding.com">Chirp</Link> where im working on encouraging people to engage more with the natural world.
      </Para>
      <H2>Previous Projects</H2>
      <Projects />
    </div>
  </Layout>
)

export default App

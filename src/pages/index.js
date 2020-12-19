import React from "react"
import tw, { styled } from "twin.macro"
import { Button, Logo, Layout, HeaderImage } from "../components"

const Title = styled.h1(() => [
  tw`text-5xl font-serif pt-12`,
])

const H2 = styled.h2(() => [tw`text-2xl font-serif pt-8`])

const Para = styled.p(() => [tw`font-sans leading-relaxed text-justify pt-8`])

const App = () => (
  <Layout
    css={[
      tw`flex flex-col items-center justify-center h-screen`,
      // tw`bg-gradient-to-b from-electric to-ribbon`,
      tw`text-center font-sans`,
    ]}
  >
    <HeaderImage />
    <div tw="flex flex-col justify-center h-full container mx-auto">
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

        I'm currently CTO at <a href="https://chirpbirding.com">Chirp</a>.
      </Para>
      <H2>
        Previous Projects
      </H2>
    </div>
  </Layout>
)

export default App

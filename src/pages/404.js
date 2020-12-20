import React from "react"
import tw from "twin.macro"

import { Typography, Dog } from "../components"
import Layout from "../components/Layout"
import SEO from "../components/SEO"

const NotFoundPage = () => (
  <Layout
    css={[
      tw`flex flex-col items-center justify-center pt-32`,
      tw`text-center font-sans`,
      tw`flex flex-col justify-center h-full container mx-auto`,
      tw`prose`,
    ]}
  >
    <SEO title="404: Not found" />
    <Typography.Title css={[tw`mt-8`]}>404: Not Found</Typography.Title>
    <Dog css={[tw`mb-8`]} />
    <Typography.P css={[tw`mt-8 text-center`]}>
      There is nothing here, just emptiness and the dark.
    </Typography.P>
  </Layout>
)

export default NotFoundPage

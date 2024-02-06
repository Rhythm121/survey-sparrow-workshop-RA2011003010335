import React from 'react'
import { Flex, Text, Heading, Link } from "@sparrowengg/twigs-react"

const Main = (props) => {

  return (
    <Flex alignItems="center" justifyContent="center" flexDirection = 'column' gap = "$3" css={{
      width: "100%",
      height: "100vh"
    }}>
      <Heading size="h4" weight="medium">Welcome to your first react app</Heading>
      <Text size="md" css={{ color: "$neutral900" }}>
        Leverage the pre-built optimized Twigs library to construct engaging UI.
      </Text>
      <Link href="https://twigs.surveysparrow.com/" target="_blank" css={{
        textDecoration: "underline",
        color: "$primary400",
      }}>Visit Twigs Documentaion</Link>
    </Flex>
  )
}

export default Main

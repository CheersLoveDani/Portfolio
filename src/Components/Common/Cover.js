import TypeWriter from 'react-typewriter'

import {
  Box,
  Flex,
  Heading,
  Text
} from '@chakra-ui/react'

function Cover() {
  return (
    <Box m={10} >
      <TypeWriter typing={1} delayMap={{
        at: 7,
        delay: 3000,
      }
      }>
        <Text fontSize={40}>
          Welcome!
        </Text>
        <Text fontSize={20}>
          My name is Dan and this is my portfolio website.
        </Text>
        <Text fontSize={20}>
          I am a software engineer who specialises in web development.
        </Text>
        <Text fontSize={20}>
          Would you like to start? {`[Y/N]`}
        </Text>
      </TypeWriter>
    </Box >
  )
}

export default Cover
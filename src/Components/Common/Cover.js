import TypeWriter from 'react-typewriter'
import React from 'react'

import {
  Box,
  Text
} from '@chakra-ui/react'


function Cover() {
  const [initialised, setInitialised] = React.useState(false)

  const initialise = () => {
    setInitialised(true)
  }

  const handleEventListener = () => {
    document.addEventListener('keydown', initialise)
  }

  React.useEffect(() => {
    return function cleanup() {
      document.removeEventListener('keydown', initialise)
    }
  }, [])

  return (
    <Box m={10}>
      {
        !initialised ?
          <TypeWriter
            typing={1}
            minDelay={50}
            onTypingEnd={handleEventListener}
            delayMap={[{
              at: 7,
              delay: 1200,
            }]}
          >
            <Text fontSize={40}>Welcome!</Text>
            <Text fontSize={20}>
              My name is Dan and this is my portfolio website.
            </Text>
            <Text fontSize={20}>
              I am a software engineer who specializes in web development.
            </Text>
            <Text fontSize={20}>
              Press any button to continue...
            </Text>
            <Text fontSize={5}>
              <span className="blinking-cursor">{'\u2588'}</span>
            </Text>
          </TypeWriter>
          :
          <Text fontSize={40}>This site is still a work in progress! Please check back soon for some great projects!</Text>
      }

    </Box>
  )
}

export default Cover

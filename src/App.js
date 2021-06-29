import React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import '@fontsource/ubuntu-mono'
import Cover from './Components/Common/Cover'

import theme from './theme'
function App() {
  return (
    <ChakraProvider theme={theme}>
      <Cover />
    </ChakraProvider>
  )
}

export default App

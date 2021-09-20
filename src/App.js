import React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import '@fontsource/ubuntu-mono'
import '@fontsource/alegreya-sans-sc'
import Nav from './Components/Common/Nav'
import theme from './theme'
import Main from './Components/Common/Main'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Contacts from './Components/Common/Contacts'
import About from './Components/Common/About'
import Future from './Components/Common/Future'

function App() {
  return (
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <Nav />
        <Switch>
          <Route exact path='/' component={About} />
          <Route path='/contact' component={Contacts} />
          <Route path='/projects' component={Main} />
          <Route path='/future' component={Future} />
        </Switch>
      </BrowserRouter>
    </ChakraProvider>
  )
}

export default App

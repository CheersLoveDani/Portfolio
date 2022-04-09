import React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import '@fontsource/ubuntu-mono'
import '@fontsource/alegreya-sans-sc'
import Nav from './Components/Portfolio/Nav'
import theme from './theme'
import Main from './Components/Portfolio/Main'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Contacts from './Components/Portfolio/Contacts'
import About from './Components/Portfolio/About'
import Future from './Components/Portfolio/Future'
import Home from './Components/Main/Home'

function App() {
  return (
    <ChakraProvider theme={theme}>
      <BrowserRouter>

        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/portfolio/' >
            <Nav />
            <Route index component={About} />
            <Route path='/portfolio/about' component={About} />
            <Route path='/portfolio/contact' component={Contacts} />
            <Route path='/portfolio/projects' component={Main} />
            <Route path='/portfolio/future' component={Future} />
          </Route>
        </Switch>
      </BrowserRouter>
    </ChakraProvider>
  )
}

export default App

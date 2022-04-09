import {
  Button,
  ButtonGroup,
  Flex,
  Heading,
  Text
} from '@chakra-ui/react'

import { Link } from 'react-router-dom'

function Nav() {
  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      padding={4}
      bg="#4c5154"
      color="white"
    >

      <Heading
        flex={1}
        fontFamily='Alegreya Sans SC'
      >
        Daniel Fullerton
      </Heading>

      <ButtonGroup isAttached>

        <Button variant='ghost' p={1}>
          <Link to='/'>
            <Text
              padding={{ base: 0, lg: 4 }}
            >
              Home
            </Text>
          </Link>
        </Button>

        <Button variant='ghost' p={1}>
          <Link to='/portfolio/about'>
            <Text
              padding={{ base: 0, lg: 4 }}
            >
              About
            </Text>
          </Link>
        </Button>

        <Button variant='ghost' p={1}>
          <Link to='/portfolio/projects'>
            <Text
              padding={{ base: 0, lg: 4 }}
            >
              Projects
            </Text>
          </Link>
        </Button>

        <Button variant='ghost' p={1}>
          <Link to='/portfolio/contact'>
            <Text
              padding={{ base: 0, lg: 4 }}
            >
              Contact
            </Text>
          </Link>
        </Button>

        {/* <Button variant='ghost' p={1}>
          <Link to='/portfolio/future'>
            <Text
              padding={{ base: 0, lg: 4 }}
            >
              Future
            </Text>
          </Link>
        </Button> */}
      </ButtonGroup>



    </Flex>
  )
}

export default Nav

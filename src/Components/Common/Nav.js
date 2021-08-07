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
      bg="#003838"
      color="white"
    >

      <Heading
        flex={1}>
        Daniel Fullerton
      </Heading>

      <ButtonGroup isAttached>
        <Button>
          <Link to='/'>
            <Text
              padding={4}
            >
              Projects
            </Text>
          </Link>
        </Button>


        <Button>
          <Link to='/contact'>
            <Text
              padding={4}
            >
              Contact
            </Text>
          </Link>
        </Button>

        <Button>
          <Link to='/about'>
            <Text
              padding={4}
            >
              About
            </Text>
          </Link>
        </Button>

        <Button>
          <Link to='/future'>
            <Text
              padding={4}
            >
              Future
            </Text>
          </Link>
        </Button>
      </ButtonGroup>



    </Flex>
  )
}

export default Nav

import {
  EmailIcon
} from '@chakra-ui/icons'

import {
  Box,
  Link,
  Heading,
  Icon,
  Text
} from '@chakra-ui/react'

import {
  FaAddressBook,
  FaGithub,
  FaLinkedin
} from 'react-icons/fa'


function Contacts() {
  return (
    <Box m={{ base: 4, lg: 10 }}>
      <Heading fontSize={{ base: '5vw', lg: '3vw' }}>
        My Info
      </Heading>
      <Box m={{ base: 4, lg: 5 }}>
        <Text mb={2} fontSize={{ base: '4vw', lg: '2vw' }}>
          <Icon as={FaAddressBook} boxSize={{ base: '4vw', lg: '2vw' }} mb={2} mr={1} />
          Address: Croydon, Greater London
        </Text>
        <Text mb={2} fontSize={{ base: '4vw', lg: '2vw' }}>
          <Icon as={EmailIcon} boxSize={{ base: '4vw', lg: '2vw' }} mb={2} mr={1} />
          Email: danielsdfullerton@gmail.com
        </Text>
        <Text mb={2} fontSize={{ base: '4vw', lg: '2vw' }}>
          <Link href='https://www.linkedin.com/in/danielsdfullerton/' isExternal>
            <Icon as={FaLinkedin} boxSize={{ base: '4vw', lg: '2vw' }} mb={2} mr={1} />
            LinkedIn: linkedin.com/in/danielsdfullerton/
          </Link>
        </Text>
        <Text mb={2} fontSize={{ base: '4vw', lg: '2vw' }}>
          <Link href='https://github.com/sirdantheawesome' isExternal>
            <Icon as={FaGithub} boxSize={{ base: '4vw', lg: '2vw' }} mb={2} mr={1} />
            GitHub: github.com/sirdantheawesome
          </Link>
        </Text>
      </Box>

    </Box>

  )
}

export default Contacts
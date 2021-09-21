import {
  Box,
  Icon,
  Image,
  Link,
  SimpleGrid,
  Text,
  useMediaQuery
} from '@chakra-ui/react'

import {
  FaGithub,
  FaPlayCircle
} from 'react-icons/fa'

function ProjectTemplate({ img, title, text, isRight, playLink, gitHub, tools }) {

  const [isMobile] = useMediaQuery('(max-width: 990px)')

  return (
    <Box mb={10} >
      {
        isRight && !isMobile ?
          <>
            <Box p={5}>
              <SimpleGrid columns={{ base: 1, lg: 2 }}>
                <Box>
                  <Text
                    fontSize={{ base: '4vw', lg: '2vw' }}
                    as='em'
                    textAlign='right'
                    display='block'
                    mr='4%'
                    mb={{ base: 2, lg: 2 }}
                  >
                    {title}
                  </Text>
                  <Text
                    mb={3}
                    textAlign='right'
                    display='block'
                    mr='4%'
                    fontSize={{ base: '1.6vw', lg: '0.8vw' }}
                  >
                    {tools}
                  </Text>
                  <Text
                    mb={5}
                    fontSize={{ base: '2.3vw', lg: '1.2vw' }}
                    mr='4%'
                  >
                    {text}
                  </Text>
                  <Link href={playLink} isExternal>
                    <Icon as={FaPlayCircle} boxSize={{ base: '6vw', lg: '4vw' }} mb={2} />
                  </Link>
                  <Link href={gitHub} isExternal>
                    <Icon as={FaGithub} boxSize={{ base: '6vw', lg: '4vw' }} mb={2} />
                  </Link>
                </Box>
                <Image src={img} width='100%' />
              </SimpleGrid>
            </Box>
          </>
          :
          <>

            <Box p={5}>
              <SimpleGrid columns={{ base: 1, lg: 2 }}>
                <Image src={img} width={{ base: '100%', lg: '96%' }} />
                <Box>
                  <Text
                    fontSize={{ base: '4vw', lg: '2vw' }}
                    display='block'
                    mt={{ base: 4, lg: 1 }}
                    mb={{ base: 4, lg: 4 }}
                    as='em'
                  >
                    {title}
                  </Text>
                  <Text
                    mb={3}
                    fontSize={{ base: '1.6vw', lg: '0.8vw' }}
                  >
                    {tools}
                  </Text>
                  <Text
                    mb={5}
                    fontSize={{ base: '2.3vw', lg: '1.2vw' }}
                  >
                    {text}
                  </Text>
                  <Link href={playLink} isExternal>
                    <Icon as={FaPlayCircle} boxSize={{ base: '6vw', lg: '4vw' }} mb={2} />
                  </Link>
                  <Link href={gitHub} isExternal>
                    <Icon as={FaGithub} boxSize={{ base: '6vw', lg: '4vw' }} mb={2} />
                  </Link>
                </Box>
              </SimpleGrid>
            </Box>
          </>
      }
    </Box>
  )
}


export default ProjectTemplate
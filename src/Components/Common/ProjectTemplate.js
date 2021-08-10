import {
  Box,
  Icon,
  Image,
  Link,
  SimpleGrid,
  Text,
  useMediaQuery
} from '@chakra-ui/react'

import { FaGithub, FaPlayCircle } from 'react-icons/fa'

function ProjectTemplate({ img, title, text, isRight, playLink, gitHub }) {

  const [isMobile] = useMediaQuery('(max-width: 990px)')

  return (
    <Box mb={10} >
      {
        isRight && !isMobile ?
          <>
            <Box border='1px' p={5}>
              <SimpleGrid columns={{ base: 1, lg: 2 }}>
                <Box>
                  <Text
                    fontSize={{ base: '4vw', lg: '2vw' }}
                    as='em'
                    textAlign='right'
                    display='block'
                    mr='4%'
                    mb={{ base: 4, lg: 10 }}
                  >
                    {title}
                  </Text>
                  <Text
                    mb={5}
                    fontSize={{ base: '2.5vw', lg: '1.4vw' }}
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

            <Box border='1px' p={5}>
              <SimpleGrid columns={{ base: 1, lg: 2 }}>
                <Image src={img} width={{ base: '100%', lg: '96%' }} />
                <Box>
                  <Text
                    fontSize={{ base: '4vw', lg: '2vw' }}
                    display='block'
                    mt={{ base: 4, lg: 1 }}
                    mb={{ base: 4, lg: 10 }}
                    as='em'
                  >
                    {title}
                  </Text>
                  <Text
                    mb={5}
                    fontSize={{ base: '2.5vw', lg: '1.4vw' }}
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
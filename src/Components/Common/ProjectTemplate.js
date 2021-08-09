import {
  Box,
  Image,
  SimpleGrid,
  Text
} from '@chakra-ui/react'

function ProjectTemplate({ img, title, text, isRight }) {
  return (
    <Box mb={10} >
      {
        isRight ?
          <>
            <Text
              fontSize='4xl'
              as='em'
              textAlign='right'
              display='block'
              mr={50}
            >
              {title}
            </Text>
            <Box>
              <SimpleGrid columns={2}>
                <Text >{text}</Text>
                <Image src={img} width='95%' />
              </SimpleGrid>
            </Box>
          </>
          :
          <>
            <Text
              fontSize='4xl'
              as='em'
            >
              {title}
            </Text>
            <Box>
              <SimpleGrid columns={2}>
                <Image src={img} width='95%' />
                <Text >{text}</Text>
              </SimpleGrid>
            </Box>
          </>
      }
    </Box>
  )
}

export default ProjectTemplate
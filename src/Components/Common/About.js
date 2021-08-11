/* eslint-disable react/no-unescaped-entities */
import {
  Box,
  Center,
  Heading,
  Icon,
  Image,
  Text
} from '@chakra-ui/react'

import {
  SiUnity,
  SiBlender,
  SiBulma,
  SiCsswizardry,
  SiGit,
  SiGithub,
  SiGodotengine,
  SiHeroku,
  SiHtml5,
  SiJavascript,
  SiJest,
  SiKrita,
  SiMongodb,
  SiNetlify,
  SiNodeDotJs,
  SiNpm,
  SiPostgresql,
  SiPython,
  SiReact,
  SiSass,
  SiUnrealengine,
  SiVisualstudiocode,
  SiYarn
} from 'react-icons/si'


function About() {
  return (
    <Box m={{ base: 4, lg: 10 }}>
      <Heading fontSize={{ base: '5vw', lg: '3vw' }} mb={5}>
        About Me
      </Heading>
      <Box>
        <Text mb={2} fontSize={{ base: '4vw', lg: '2vw' }}>
          At a Glance:
        </Text>
        <Box m={{ base: 4, lg: 5 }}>
          <Text mb={2} fontSize={{ base: '2.5vw', lg: '1.5vw' }}>
            I started off creating game prototypes in game engines such as Unity and Unreal Engine 4 in my spare time.
            I have a passion for creative problem solving based around getting the best user experience out of what I make.

          </Text>
          <Text mb={2} fontSize={{ base: '2.5vw', lg: '1.5vw' }}>
            I went on to study software engineering at GA and completed some great projects independently and in a group environment.
            Growing my knowledge base and skills motivates me to progress in the industry and personally.
          </Text>
          <Text mb={2} fontSize={{ base: '2.5vw', lg: '1.5vw' }}>
            What's important for me is equality and a progressive work environment and I make sure to bring that energy into the things I do.
            I am looking forward to working in a creative and positive team environment which promotes skill improvements.
          </Text>
        </Box>
      </Box>
      <Box>
        <Text mb={2} fontSize={{ base: '4vw', lg: '2vw' }}>
          Skills:
        </Text>
        <Box m={{ base: 4, lg: 5 }}>
          <Center m={2}>
            <Icon as={SiJavascript} boxSize={{ base: '6vw', lg: '4vw' }} m={2} />
            <Icon as={SiReact} boxSize={{ base: '6vw', lg: '4vw' }} m={2} />
            <Icon as={SiHtml5} boxSize={{ base: '6vw', lg: '4vw' }} m={2} />
            <Icon as={SiCsswizardry} boxSize={{ base: '6vw', lg: '4vw' }} m={2} />
            <Icon as={SiSass} boxSize={{ base: '6vw', lg: '4vw' }} m={2} />
            <Icon as={SiBulma} boxSize={{ base: '6vw', lg: '4vw' }} m={2} />
            <Icon as={SiNodeDotJs} boxSize={{ base: '6vw', lg: '4vw' }} m={2} />
            <Icon as={SiMongodb} boxSize={{ base: '6vw', lg: '4vw' }} m={2} />
            <Icon as={SiPython} boxSize={{ base: '6vw', lg: '4vw' }} m={2} />
          </Center>
          <Center m={2}>
            <Icon as={SiHeroku} boxSize={{ base: '6vw', lg: '4vw' }} m={2} />
            <Icon as={SiNetlify} boxSize={{ base: '6vw', lg: '4vw' }} m={2} />
            <Icon as={SiNpm} boxSize={{ base: '6vw', lg: '4vw' }} m={2} />
            <Icon as={SiYarn} boxSize={{ base: '6vw', lg: '4vw' }} m={2} />
            <Icon as={SiGit} boxSize={{ base: '6vw', lg: '4vw' }} m={2} />
            <Icon as={SiGithub} boxSize={{ base: '6vw', lg: '4vw' }} m={2} />
            <Icon as={SiPostgresql} boxSize={{ base: '6vw', lg: '4vw' }} m={2} />
            <Icon as={SiJest} boxSize={{ base: '6vw', lg: '4vw' }} m={2} />
            <Icon as={SiVisualstudiocode} boxSize={{ base: '6vw', lg: '4vw' }} m={2} />
          </Center>



        </Box>
      </Box>
      <Box>
        <Text mb={2} fontSize={{ base: '4vw', lg: '2vw' }}>
          My Interests:
        </Text>
        <Box m={{ base: 4, lg: 5 }}>
          <Text mb={2} fontSize={{ base: '2.5vw', lg: '1.5vw' }}>
            Game development, prototypes in various game engines and experience with different tools.
          </Text>
          <Center m={50}>
            <Icon as={SiUnity} boxSize={{ base: '10vw', lg: '8vw' }} m={2} />
            <Icon as={SiGodotengine} boxSize={{ base: '10vw', lg: '8vw' }} m={2} />
            <Icon as={SiUnrealengine} boxSize={{ base: '10vw', lg: '8vw' }} m={2} />
            <Icon as={SiBlender} boxSize={{ base: '10vw', lg: '8vw' }} m={2} />
            <Icon as={SiKrita} boxSize={{ base: '10vw', lg: '8vw' }} m={2} />
          </Center>
          <Text mb={2} fontSize={{ base: '2.5vw', lg: '1.5vw' }}>
            Competitive gaming in a team environment, entering tournaments. I play for an Overwatch team and have participated in Open Division and GGEU where we made playoffs.
          </Text>
          <Center>
            <Image src='https://res.cloudinary.com/sirdancloud/image/upload/v1628693445/Portfolio/LSD_Logo_cksztf.png' m={2} maxW={{ base: '70%', lg: '30%' }} borderRadius={10} />
          </Center>

          <Text mb={2} fontSize={{ base: '2.5vw', lg: '1.5vw' }}>
            Dungeons and Dragons! I love the story telling as both a player and a dungeon master. You learn a lot about organising a group by running a game!
          </Text>
          <Center>
            <Image src='https://upload.wikimedia.org/wikipedia/en/thumb/8/8e/Dungeons_%26_Dragons_5th_Edition_logo.svg/1200px-Dungeons_%26_Dragons_5th_Edition_logo.svg.png' m={2} maxW={{ base: '80%', lg: '50%' }} />
          </Center>
        </Box>

      </Box>

    </Box >
  )
}

export default About
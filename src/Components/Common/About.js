/* eslint-disable react/no-unescaped-entities */
import TouchTooltip from '../../lib/TouchTooltip'

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
            <TouchTooltip label='JavaScript' placement='top'>
              <span><Icon as={SiJavascript} boxSize={{ base: '6vw', lg: '4vw' }} m={2} /></span>
            </TouchTooltip>
            <TouchTooltip label='React' placement='top'>
              <span><Icon as={SiReact} boxSize={{ base: '6vw', lg: '4vw' }} m={2} /></span>
            </TouchTooltip>
            <TouchTooltip label='Html5' placement='top'>
              <span><Icon as={SiHtml5} boxSize={{ base: '6vw', lg: '4vw' }} m={2} /></span>
            </TouchTooltip>

            <TouchTooltip label='CSS' placement='top'>
              <span><Icon as={SiCsswizardry} boxSize={{ base: '6vw', lg: '4vw' }} m={2} /></span>
            </TouchTooltip>

            <TouchTooltip label='SASS' placement='top'>
              <span><Icon as={SiSass} boxSize={{ base: '6vw', lg: '4vw' }} m={2} /></span>
            </TouchTooltip>

            <TouchTooltip label='Bulma' placement='top'>
              <span><Icon as={SiBulma} boxSize={{ base: '6vw', lg: '4vw' }} m={2} /></span>
            </TouchTooltip>

            <TouchTooltip label='Node.js' placement='top'>
              <span><Icon as={SiNodeDotJs} boxSize={{ base: '6vw', lg: '4vw' }} m={2} /></span>
            </TouchTooltip>

            <TouchTooltip label='Mongodb' placement='top'>
              <span><Icon as={SiMongodb} boxSize={{ base: '6vw', lg: '4vw' }} m={2} /></span>
            </TouchTooltip>

            <TouchTooltip label='Python' placement='top'>
              <span><Icon as={SiPython} boxSize={{ base: '6vw', lg: '4vw' }} m={2} /></span>
            </TouchTooltip>

          </Center>
          <Center m={2}>
            <TouchTooltip label='Heroku' placement='bottom'>
              <span><Icon as={SiHeroku} boxSize={{ base: '6vw', lg: '4vw' }} m={2} /></span>
            </TouchTooltip>

            <TouchTooltip label='Netlify' placement='bottom'>
              <span><Icon as={SiNetlify} boxSize={{ base: '6vw', lg: '4vw' }} m={2} /></span>
            </TouchTooltip>

            <TouchTooltip label='Node Package Manager' placement='bottom'>
              <span><Icon as={SiNpm} boxSize={{ base: '6vw', lg: '4vw' }} m={2} /></span>
            </TouchTooltip>

            <TouchTooltip label='Yarn' placement='bottom'>
              <span><Icon as={SiYarn} boxSize={{ base: '6vw', lg: '4vw' }} m={2} /></span>
            </TouchTooltip>

            <TouchTooltip label='Git' placement='bottom'>
              <span><Icon as={SiGit} boxSize={{ base: '6vw', lg: '4vw' }} m={2} /></span>
            </TouchTooltip>

            <TouchTooltip label='GitHub' placement='bottom'>
              <span><Icon as={SiGithub} boxSize={{ base: '6vw', lg: '4vw' }} m={2} /></span>
            </TouchTooltip>

            <TouchTooltip label='Postgresql' placement='bottom'>
              <span><Icon as={SiPostgresql} boxSize={{ base: '6vw', lg: '4vw' }} m={2} /></span>
            </TouchTooltip>

            <TouchTooltip label='Jest' placement='bottom'>
              <span><Icon as={SiJest} boxSize={{ base: '6vw', lg: '4vw' }} m={2} /></span>
            </TouchTooltip>

            <TouchTooltip label='Visual Studio Code' placement='bottom'>
              <span><Icon as={SiVisualstudiocode} boxSize={{ base: '6vw', lg: '4vw' }} m={2} /></span>
            </TouchTooltip>


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
            <TouchTooltip label='Unity' >
              <span><Icon as={SiUnity} boxSize={{ base: '10vw', lg: '8vw' }} m={2} /></span>
            </TouchTooltip>

            <TouchTooltip label='Godot'>
              <span><Icon as={SiGodotengine} boxSize={{ base: '10vw', lg: '8vw' }} m={2} /></span>
            </TouchTooltip>

            <TouchTooltip label='Unreal Engine'>
              <span><Icon as={SiUnrealengine} boxSize={{ base: '10vw', lg: '8vw' }} m={2} /></span>
            </TouchTooltip>

            <TouchTooltip label='Blender'>
              <span><Icon as={SiBlender} boxSize={{ base: '10vw', lg: '8vw' }} m={2} /></span>
            </TouchTooltip>

            <TouchTooltip label='Krita'>
              <span><Icon as={SiKrita} boxSize={{ base: '10vw', lg: '8vw' }} m={2} /></span>
            </TouchTooltip>


          </Center>
          <Text mb={2} fontSize={{ base: '2.5vw', lg: '1.5vw' }}>
            Competitive gaming in a team environment, entering tournaments. I play for an Overwatch team and have participated in Open Division and GGEU where we made playoffs.
          </Text>
          <Center>
            <Image src='https://res.cloudinary.com/sirdancloud/image/upload/v1628693445/Portfolio/LSD_Logo_cksztf.png' m={2} mb={10} maxW={{ base: '70%', lg: '30%' }} borderRadius={10} />
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
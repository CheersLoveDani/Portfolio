import {
  Box,
  Heading
} from '@chakra-ui/react'
import ProjectTemplate from './ProjectTemplate'


function Main() {
  return (
    <Box margin={10}>
      <Heading fontSize={{ base: '5vw', lg: '3vw' }} mb={5}>Projects</Heading>
      <ProjectTemplate
        img='https://res.cloudinary.com/sirdancloud/image/upload/v1628526857/Portfolio/2048_Portfolio_Picture_nktxxh.png'
        title='2048'
        text='2048 is a simple grid based game I recreated using vanilla JavaScript, HTML and CSS.'
        playLink='https://sirdantheawesome.github.io/2048/'
        gitHub='https://github.com/sirdantheawesome/2048'
        isRight={false}
      />
      <ProjectTemplate
        img='https://res.cloudinary.com/sirdancloud/image/upload/v1628601108/Portfolio/Mars-Through-Curiosity_k36wmb.png'
        title='Mars Through Curiosity'
        text='Mars Through Curiosity is a web app made to showcase the stunning images taken by NASAs Curiosity Rover.'
        playLink='https://sirdan-mars-through-curiosity.netlify.app/'
        gitHub='https://github.com/sirdantheawesome/Mars-Through-Curiosity'
        isRight={true}
      />
      <ProjectTemplate
        img='https://res.cloudinary.com/sirdancloud/image/upload/v1628605319/Portfolio/Peak_iwopjn.png'
        title='Peak Social Media'
        text='The aim with this project was to mimic a social media site in feel and functionality.'
        playLink='https://peek3.netlify.app/'
        gitHub='https://github.com/sirdantheawesome/Peak-Social-server'
        isRight={false}
      />
      <ProjectTemplate
        img='https://res.cloudinary.com/sirdancloud/image/upload/v1628605931/Portfolio/OTB_qmnpmh.png'
        title='Overwatch Team Builder'
        text='The Overwatch Team Builder is a place to create and join different Overwatch teams. The functionality and feel is intuitive and easy to use.'
        playLink='https://overwatch-team-builder.netlify.app/'
        gitHub='https://github.com/sirdantheawesome/OTB-Frontend'
        isRight={true}
      />
    </Box>
  )
}

export default Main
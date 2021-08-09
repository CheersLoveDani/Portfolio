import {
  Box,
  Heading
} from '@chakra-ui/react'
import ProjectTemplate from './ProjectTemplate'


function Main() {
  return (
    <Box margin={10}>
      <Heading mb={5}>Projects</Heading>
      <ProjectTemplate
        img='https://res.cloudinary.com/sirdancloud/image/upload/v1628526857/Portfolio/2048_Portfolio_Picture_nktxxh.png'
        title='2048'
        text='2048 is a simple grid based game I recreated using vanilla JavaScript, HTML and CSS'
        isRight={false}
      />
      <ProjectTemplate
        img='https://res.cloudinary.com/sirdancloud/image/upload/v1628526857/Portfolio/2048_Portfolio_Picture_nktxxh.png'
        title='Mars Through Curiosity'
        text='2048 is a simple grid based game I recreated using vanilla JavaScript, HTML and CSS'
        isRight={true}
      />
    </Box>
  )
}

export default Main
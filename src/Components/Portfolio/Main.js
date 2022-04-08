import {
  Box,
  Heading
} from '@chakra-ui/react'
import ProjectTemplate from './ProjectTemplate'


function Main() {
  return (
    <Box m={{ base: 4, lg: 10 }}>
      <Heading fontSize={{ base: '5vw', lg: '3vw' }} mb={5}>Projects</Heading>
      <ProjectTemplate
        img='https://res.cloudinary.com/sirdancloud/image/upload/v1628526857/Portfolio/2048_Portfolio_Picture_nktxxh.png'
        title='2048'
        text='For my first GA project I recreated the modern classic 2048 using vanilla 
        JavaScript, CSS and HTML. This was a solo project and I aimed to keep the style
        and feel of the game consistent with what you expect from it for practice on styling.
        The game works well and plays intuitively. The game also scales well in any screen
        size which was important to achieve.'
        playLink='https://sirdantheawesome.github.io/2048/'
        gitHub='https://github.com/sirdantheawesome/2048'
        tools='JavaScript | CSS | HTML'
        isRight={false}

      />
      <ProjectTemplate
        img='https://res.cloudinary.com/sirdancloud/image/upload/v1628601108/Portfolio/Mars-Through-Curiosity_k36wmb.png'
        title='Mars Through Curiosity'
        text='As a pair we made a site which displays images from NASA’s Curiosity rover on Mars. 
        We used React to make the site and used the NASA rover API to pull images.
        The idea is that you can enter any Mars sol date from the Curiosity rovers mission
        lifespan and see what images it captured on that day.
        I worked a lot on fetching the data correctly based on the user input,
        which included error handling to stop things breaking and intuitive user interactions.
        '
        playLink='https://sirdan-mars-through-curiosity.netlify.app/'
        gitHub='https://github.com/sirdantheawesome/Mars-Through-Curiosity'
        tools='React JavaScript | Bulma CSS | Axios | Netlify'
        isRight={true}
      />
      <ProjectTemplate
        img='https://res.cloudinary.com/sirdancloud/image/upload/v1628605319/Portfolio/Peak_iwopjn.png'
        title='Peak Social Media'
        text='As a group of 3 we made a social media site with React as the front end and MongoDB 
        and Express for the back end. As a bit of a mix between Instagram and Facebook,
        users can create, like and comment on posts.
        I worked on how the individual posts and comments displayed and a lot of the intuitive
        interactions on the page. It was important that the user could click on a profile name
        or icon anywhere and be taken to the corresponding profile page. Overall the project
        went well with room for additions.'
        playLink='https://peek3.netlify.app/'
        gitHub='https://github.com/sirdantheawesome/Peak-Social-server'
        tools='React JavaScript | Bulma CSS | Axios | Netlify | Express JavaScript | MongoDB | Heroku'
        isRight={false}
      />
      <ProjectTemplate
        img='https://res.cloudinary.com/sirdancloud/image/upload/v1628605931/Portfolio/OTB_qmnpmh.png'
        title='Overwatch Team Builder'
        text='For my final project at GA I decided to work solo to really round out my skills in all 
        aspects of full stack development. I made a team builder and management website for the fps
        game Overwatch. I used Django with Python to create a PostgreSQL database which stored the
        Hero data, User data and Team data. I built the front end in React and used Axios to connect
        to the back end. I learnt a new CSS React framework for this project called Chakra UI and
        overall I think the project turned out great.'
        playLink='https://overwatch-team-builder.netlify.app/'
        gitHub='https://github.com/sirdantheawesome/OTB-Frontend'
        tools='React JavaScript | Chakra UI CSS | Axios | Netlify | Django Python | PostgreSQL | Heroku'
        isRight={true}
      />
    </Box>
  )
}

export default Main
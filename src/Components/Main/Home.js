import Goo from 'gooey-react'
import { Link } from 'react-router-dom'
import HomeMenuItem from './HomeMenuItem'

function Home() {
  return (
    <div className='home-page'>
      <Goo composite>
        <div className='background-blob blob-1' />
        <div className='background-blob blob-2' />
        <div className='background-blob blob-3' />
      </Goo>

      <div className='circle-container'>

        <HomeMenuItem title='Portfolio' link='/portfolio/' />
        <HomeMenuItem />
        <HomeMenuItem />
        <HomeMenuItem />
        <HomeMenuItem />




      </div>
    </div >
  )
}

export default Home
import { Link } from 'react-router-dom'

function HomeMenuItem(props) {
  return (
    <div className='container-child'>
      <Link to={props.link ? props.link : '/'}>
        <div className='circle-inner'>
          <p>
            {props.title ? props.title : 'Placeholder'}
          </p>
        </div>
      </Link>
    </div>
  )
}

export default HomeMenuItem
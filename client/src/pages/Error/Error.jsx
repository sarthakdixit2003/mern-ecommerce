import './Error.css';
import { Link } from 'react-router-dom';

const Error = () => {
  return (
    <div className='error'>
      <h1>404 NOT FOUND</h1>
			<p>Your Visited Page Not Found. You May Go Back To Home Page.</p>
			<Link to='/'><button>Back To Home Page</button></Link>
    </div>
  )
}

export default Error
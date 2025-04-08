import React from 'react'
import Login from './authentication/login';
import Signup from './authentication/signup';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
        <Link to="/login">login</Link> <br /> <br />
        <Link to="/signup">signup</Link>
    </div>
  )
}

export default Home
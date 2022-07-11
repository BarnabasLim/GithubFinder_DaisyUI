import React from 'react'
import UserResults from '../components/users/UserResults'

const Home = () => {
  return (
    <div>
        <h1 className="text-6xl">Welcome</h1>
        {process.env.REACT_APP_GITHUB_TOKEN}
        <UserResults/>
    </div>
  )
}

export default Home
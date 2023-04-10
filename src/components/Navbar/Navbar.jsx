import { useState } from 'react'
import { LoginButton } from '../Login/Login'
import { LogoutButton } from '../Login/Logout'


const Navbar = () => 
{
  const [ isLoggedIn, setIsLoggedIn] = useState(false)

  return (
    <div className="navbar fixed bg-opacity-40 bg-gray-dark h-20">
  <div className="navbar-start">
    <a className="btn btn-ghost normal-case text-4xl text-dark-grey-200">ViewFinder</a>
  </div>
  <div className="navbar-end mr-1">

    <LoginButton/>
    { isLoggedIn && (<LogoutButton/>)}
  </div>
</div>

  )
}

export default Navbar
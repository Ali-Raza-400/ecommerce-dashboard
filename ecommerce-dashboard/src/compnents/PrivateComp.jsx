import React from 'react'
import {Outlet,Navigate} from 'react-router-dom'
const PrivateComp = () => {
    const auth=localStorage.getItem('users')
  return (
    <div>
        {auth?<Outlet/>:<Navigate to='/SignUp'/>}
      
    </div>
  )
}

export default PrivateComp

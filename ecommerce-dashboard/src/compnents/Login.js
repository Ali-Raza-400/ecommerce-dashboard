import React, { useEffect, useState } from 'react'

import axios from 'axios'
import { Navigate, useNavigate } from 'react-router-dom'
const Login = () => {
  const nevigate=useNavigate()
  const[email,setEmail]=useState("")
  const[password,setPassword]=useState("")
  useEffect(()=>{
    const auth =localStorage.getItem("users")
    if(auth){
      nevigate('/')
    }
  })
  const onSubmit=async()=>{
    // console.log(email,password,"email and password values respectively")
   try {
   var response= await axios.post("http://localhost:5000/login",{email,password})
    console.log("success",response.data)
    
   } catch (error) {
    console.log(error,"errpr")
   }
  if(response){
    localStorage.setItem("users",JSON.stringify(response))
    nevigate('/')
  }
  }
  return (
    <div>
      <h1>Login Form</h1>
      <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} />
      <input type="password" value={password} onChange={e=>setPassword(e.target.value)} />
      <button onClick={onSubmit}>Login</button>
    </div>
  )
}

export default Login

import React from 'react'
import { useNavigate } from "react-router-dom"
import { useState } from 'react'
import './register.css'
import { useEffect } from 'react'
import axios from 'axios'
const Register = () => {
    const [name, setName] = useState("")
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")
    const nevigate = useNavigate()
    useEffect(() => {
        const auth = localStorage.getItem('users')
        if (auth) {
            nevigate('/')
        }
    }, [])
    const collectData = async () => {
        console.log(name, email, password)
        // let result = await fetch("http://localhost:5000/register", {
        //     method: "post",
        //     body: JSON.stringify({ name, email, password }),
        //     headers: {
        //         "Content-type": "application/json"
        //     }
        // })
        // result = await result.json()
        // using axios
        try {
            
          var result=await  axios.post("http://localhost:5000/register",{name,email,password})
          console.log(result.data,"register Successful")
        } catch (error) {
            console.log("register Failed")
        }
        localStorage.setItem("users", JSON.stringify(result))

        nevigate('/')

    }
    return (
        <div className="Container">
            <h1>Register Form</h1>
            <input placeholder='Enter Your Name' className="styleRegister" type="text" value={name} onChange={e => setName(e.target.value)} />
            <input placeholder='Enter Your Email' className="styleRegister" type="text" value={email} onChange={e => setEmail(e.target.value)} />
            <input placeholder='Enter Your Password' className="styleRegister" type="password" value={password} onChange={e => setPassword(e.target.value)} />
            <button onClick={collectData}>SignUp</button>
        </div>
    )
}

export default Register

import React, { useState } from 'react'
import Header from './Header'
import { Link, useNavigate} from 'react-router-dom'
import axios from 'axios';

const Login = () => {
  const navigate = useNavigate()
  const [username, setuserName] = useState("");
  const [password, setpassWord] = useState("");
  
  const handleApi =() =>{
    console.log({username,password})
    const url ="http://localhost:4000/login";
    const data = {username,password}
    axios.post(url,data)
     .then((res)=>{
        console.log(res.data)
        if(res.data.message) {
          alert(res.data.message)
           if(res.data.token){
            localStorage.setItem("token",res.data.token)
            localStorage.setItem("userId",res.data.userId)
            navigate('/');
           }
        }
     })
     .catch((err)=>{
        console.log(err)
        alert("Server error: " + err.message)
     })
  }
  return (
    <div>
        <Header/>
        Welcome to login page
        <br></br>
        USERNAME
        <input  type="text" value={username}
        onChange={(e) => {
          setuserName(e.target.value);
        }}
        />
        <br></br>
        PASSWORD
        <input  type="password" value={password}
        onChange={(e) => {
          setpassWord(e.target.value);
        }}/>
        <br></br>
        <button onClick={handleApi}>LOGIN</button>
        <Link to='/signup'>SIGNUP</Link>
        </div>
  )
}

export default Login
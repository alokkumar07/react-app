import React, { useState } from "react";
import Header from "./Header";
import { Link } from "react-router-dom";
import axios from "axios"

function SignUp() {
  const [username, setuserName] = useState("");
  const [password, setpassWord] = useState("");
  
  const handleApi =() =>{
    console.log({username,password})
    const url ="http://localhost:4000/signup";
    const data = {username,password}
    axios.post(url,data)
     .then((res)=>{
        console.log(res.data)
        if(res.data.message) {
            alert(res.data.message)
        }
     })
     .catch((err)=>{
        console.log(err)
        alert("Server error: " + err.message)
     })
  }

  return (
    <div>
      <Header />
      Welcome to signup page
      <br></br>
      USERNAME
      <input
        type="text"
        value={username}
        onChange={(e) => {
          setuserName(e.target.value);
        }}
      />
      <br></br>
      PASSWORD
      <input
        type="text"
        value={password}
        onChange={(e) => {
          setpassWord(e.target.value);
        }}
      />
      <br></br>
      <button className='login-btn' onClick={handleApi}>SIGNUP</button>
      <Link to="/login">LOGIN</Link>
    </div>
  );
};

export default SignUp;

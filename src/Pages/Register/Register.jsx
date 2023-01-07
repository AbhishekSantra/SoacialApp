import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './register.css'
const Register = () => {
    const PF=process.env.REACT_APP_PUBLIC_FOLDER;
    const[user,setUser]=useState("");
    const[email,setEmail]=useState("");
    const[password,setPassword]=useState("");
    const[confpass,setConfPassword]=useState("");
    const handleSubmit=(event)=>{
        event.preventDefault();
        if (password!==confpass) {
            alert("Password and Confirm Password must same");
        }
    }
    const validForm=()=>{
        return user.length>0 && email.length>0 && password.length>0 && password===confpass;
    }
    
  return (
    <div className="login">
        <div className="loginWrapper">
        <div className="loginLeft">
                <img className='loginImg' alt=""src={`${PF}/Logo.png`} />
                <h3 className="loginLogo">AmSocial</h3>
                <div className="loginDesc">Let's Get Social</div>
            </div>
            <div className="loginRight">
                <div className="loginBox"onSubmit={handleSubmit}>
                    <input type="Text"value={user} placeholder='UserName' className="loginInput"onChange={(e)=>setUser(e.target.value)} />
                    <input type="Email"value={email} placeholder='Email' className="loginInput"onChange={(e)=>setEmail(e.target.value)} />
                    <input type="Password"value={password} placeholder='Password' className="loginInput"onChange={(e)=>setPassword(e.target.value)} />
                    <input type="Password"value={confpass} placeholder='Confirm Password' className="loginInput"onChange={(e)=>setConfPassword(e.target.value)} />
                    <Link to="/home"><button className='loginButton'disabled={!validForm()}>SignUp</button></Link>
                    <Link to="/"><button className="loginRegisterButton">
                        Log into Account
                    </button></Link> 
                </div>
            </div>
        </div>
    </div>
  )
}

export default Register
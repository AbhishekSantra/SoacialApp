import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './login.css'
const Login = () => {
    const PF=process.env.REACT_APP_PUBLIC_FOLDER
    const[email,setEmail]=useState("");
    const[password,setPassword]=useState("");
    const handleSubmit=(event)=>{
        event.preventDefault();
    }
    const validForm=()=>{
        return email.length>0 && password.length>0;
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
                <div className="loginBox"onClick={handleSubmit}>
                    <input type="Email" required placeholder='Email'value={email} className="loginInput" onChange={(e)=>setEmail(e.target.value)}/>
                    <input type="Password" required placeholder='Password'value={password} className="loginInput" onChange={(e)=>setPassword(e.target.value)}/>
                    <Link to="/home"><button className='loginButton' type='submit'disabled={!validForm()}>Login</button></Link>
                    <span className="loginForget">Forgot Password?</span>
                    <Link to="/landing"><div className="loginForget" style={{marginBottom:"10px"}}>Login as a guest</div></Link>
                    <Link to="/register"><button className="loginRegisterButton">
                        Create a New Account 
                    </button></Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Login
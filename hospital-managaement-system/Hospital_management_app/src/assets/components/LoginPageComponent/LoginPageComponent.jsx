import React, { useState } from 'react'
import "./LoginPageComponent.css"
import axios from 'axios'

const LoginPageComponent = () => {


    const [loginUser, setLoginUser] = useState({
        loginEmail : '',
        loginPassword : ''
    })
    const [registerUser, setRegisterUser] = useState({
        userName : '',
        userEmail : '',
        userPassword : ''
    })

    const registerNameHandler = (event) => {
        setRegisterUser({
            ...registerUser, 
            userName : event.target.value
        })
    }
    const registerEmailHandler = (event) => {
        setRegisterUser({
            ...registerUser,
            userEmail : event.target.value
        })
    }
    const registerPasswordHandler = (event) => {
        setRegisterUser({
            ...registerUser,
            userPassword : event.target.value
        })
    }

    const registerFormHandler = (event) => {
        event.preventDefault()

        axios
            .post(`http://localhost:8080/api/v1/user/save`, registerUser)
            .then((response) => {
                if(response.status == 200)
                {
                    alert(`User ${registerUser.userName} has been registered`)
                    window.location.href='/login'
                }
            })
            .catch(error => {
                alert(`Status ${error.response.data.status} - ${error.response.data.message}`)
            })
    }

    const {userName, userEmail, userPassword} = registerUser


    const loginEmailHandler = (event) => {
        setLoginUser({
            ...loginUser,
            loginEmail : event.target.value
        })
    }
    const loginPasswordHandler = (event) => {
        setLoginUser({
            ...loginUser,
            loginPassword : event.target.value
        })
    }

    const loginFormHandler = (event) => {
        event.preventDefault()

        axios
        .post(`http://localhost:8080/api/v1/user/login`, loginUser)
        .then((response) => {
            if(response.status == "200")
                {
                    alert(`User has been logged in successfully`)
                    window.location.href='/book'
                }
            })
        .catch(error => {
            alert(`Status ${error.response.data.status} - ${error.response.data.message}`)
        })
    }

    const {loginEmail, loginPassword} = loginUser


  return (
    <div class="main">  	
        <input type="checkbox" id="ch"  aria-hidden="true"/>
        <div class="signup">
        <form id="loginForm" onSubmit={loginFormHandler}>
                <label for="ch" aria-hidden="true">Login</label>
                <input type="email" class="box" value={loginEmail} onChange={loginEmailHandler} placeholder="Email id" required=""/>
                <input type="password"  class="box" value={loginPassword} onChange={loginPasswordHandler} placeholder="Password" required=""/>
                <input class="button" value="Login" type="submit" />
        </form>
	        
	    </div>
        <div class="login">
        <form id="signupForm" onSubmit={registerFormHandler}>
                <label for="ch" aria-hidden="true">Sign up</label>
                <input type="text" class="box" value={userName} placeholder="your name" onChange={registerNameHandler} required=""/>
                <input type="email" class="box" value={userEmail} placeholder="Email id" onChange={registerEmailHandler} required=""/>
                <input type="password" class="box" value={userPassword} placeholder="Password" onChange={registerPasswordHandler} required=""/>
                <input class="button" value="Sign up" type="submit" />            
            </form>
            
        </div>
    </div>
  )
}

export default LoginPageComponent
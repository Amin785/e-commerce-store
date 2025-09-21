import React from 'react'
import './CSS/LoginSignup.css'

const LoginSignup = () => {
  return (
    <div className='login-sign-up'>
        <div className="login-sign-up-container">
            <h1>Sign Up</h1>
            <div className="login-sign-up-fields">
                <input type = 'text' placeholder='Your Nane' />
                <input type = 'email' placeholder='Email Address' />
                <input type = 'password' placeholder='Passwor' />
            </div>
            <button>Continue</button>
            <p className="login-signup-login">Already Have an Account? <span>Login Here</span></p>
            <div className="login-signup-agree">
                <input type = 'checkbox' name='' id='' />
                <p>By Continuing, I Agree to the Terms of Use and Privacy Policy.</p>
            </div>
        </div>
      
    </div>
  )
}

export default LoginSignup

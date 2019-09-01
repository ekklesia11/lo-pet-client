import React, { Component } from 'react';
import './styles/Logins.css';
import MainImages from './MainImages'

class Logins extends Component {
  constructor() {
    super()
    this.state={}
  }

  render() {
    return (
      <div className='login-page'>
        <div className='main-imgs'>
          <MainImages />
        </div>
        <div className='email-input'>
          <input type='text' placeholder='email' />
        </div>
        <div className='password-input'>
          <input type='password' placeholder='password' />
        </div>
        <div className='login-signup-btn'>
          <input type='button' value='login' className='login-btn'/>
          <input type='button' value='sign up' className='signup-btn'/>
        </div>
        <div className='forget-password'>
          <a href='/' onClick={(e) => e.preventDefault()}>forgot your password?</a>
        </div>
      </div>
    )
  }
}

export default Logins
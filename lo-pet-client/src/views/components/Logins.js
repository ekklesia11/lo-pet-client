import React, { Component } from 'react';
import postUserData from '../../controllers/index'
import './styles/Logins.css';

class Logins extends Component {
  constructor() {
    super()
    this.state={
      email: '',
      password: '',
    }
  }

  inputEmail = (e) => {
    this.setState({
      email: e.target.value
    })
  }

  inputPassword = (e) => {
    this.setState({
      password: e.target.value
    })
  }

  postUserLoginInfo = async () => {
    let user = {
      email: this.state.email,
      password: this.state.password
    }

    let status = await postUserData(user);

    if (status === 'ok') {
      this.setState({
        email: '',
        password: ''
      })
      console.log('welcome');
    } else {
      console.log('email or password is wrong!')
    }

  }

  enterToLogin = (e) => {
    if (e.charCode === 13) {
      this.postUserLoginInfo();
    }
  }

  render() {
    return (
      <div className='background'>
        <div className='login-page'>
          <div className='email-input'>
            <input type='text' placeholder='email' value={this.state.email} 
            onChange={this.inputEmail} 
            />
          </div>
          <div className='password-input'>
            <input type='password' placeholder='password' value={this.state.password} 
            onChange={this.inputPassword} 
            onKeyPress={this.enterToLogin} 
            />
          </div>
          <div className='login-signup-btn'>
            <input type='button' value='login' className='login-btn' 
            onClick={this.postUserLoginInfo} 
            />
            <input type='button' value='sign up' className='signup-btn'/>
          </div>
          <div className='forget-password'>
            <a href='/' onClick={(e) => e.preventDefault()}>forgot your password?</a>
          </div>
        </div>
      </div>
    )
  }
}

export default Logins
import React from 'react'
import '../stylesheets/login.css'
import axios from 'axios'
import { useState } from 'react'

export default function Login() {
  const [values, setValues] = useState({
    email: '',
    password: ''
  })

  const handleChange = (event) => {
    setValues({...values, [event.target.name]:[event.target.value]})
    document.getElementById('login_state').textContent = ''
}

  const handleSubmit = (event) => {
    event.preventDefault();
      axios.post('https://jdmx.onrender.com/login', {email: values.email[0], password: values.password[0]})
  .then(res => {
      console.log('Success!')
      localStorage.setItem("username", res.data.username)
      localStorage.setItem("id", res.data.id)
      document.getElementById('login_state').textContent = 'Sucessfully logged in!'
      return window.location.href = '/'
  })
  .catch(err => console.log(err))
  console.log('login failed: no login found')
  document.getElementById('login_state').textContent = 'Invalid Username or Password please try again'
}

  return (
    <div>
      <div className='login_card'>
        <div className='login_photo'>
          <img id='login_img' src="images/jdmx_login.jpeg" alt="" />
          </div> 
        <form className='login_section' onSubmit={handleSubmit}>
          <h4>Welcome</h4>
          <label for="login_email">EMAIL ADDRESS*</label>
          <input type="text" id="login_email" name="email" placeholder="Example@gmail.com" onChange={handleChange}/>
          <label for="login_password">PASSWORD*</label>
          <input type="password" id="login_password" name="password" placeholder="Password" onChange={handleChange}/>
          <button type='submit' id='login_btn'>LOGIN</button>
          <a href='signup' id='signup_route'>Don't have an account? Sign Up</a>
          <p id='login_state'></p>
          </form>
      </div>
    </div>
  )
}

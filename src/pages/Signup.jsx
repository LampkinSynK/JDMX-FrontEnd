import React from 'react'
import '../stylesheets/login.css' 
import { useState, useEffect } from 'react'
import axios from 'axios'

export default function Signup() {
    const [values, setValues] = useState({
        first_name: '',
        last_name: '',
        email: '',
        password: ''
    })

    useEffect(() => {
        const pass = document.getElementById("password")
        const email = document.getElementById("signup_email")
        const firstName = document.getElementById("signup_first_name")
        const lastName = document.getElementById("signup_last_name")

        pass.addEventListener('keyup', () => {
            if (pass.value.length > 6) {
                pass.style.backgroundColor = 'rgb(185, 206, 154)';
            } else {
                pass.style.backgroundColor = 'red';
            }
        })
        email.addEventListener('keyup', () => {
            if(email.value.match(/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}$/)) {
                email.style.backgroundColor = 'rgb(185, 206, 154)';
            } else {
                email.style.backgroundColor = 'red';
            }
        })
        firstName.addEventListener('keyup', () => {
            if((firstName.value.match(/^[A-Za-z]*$/)&&firstName.value.length > 0)){
                firstName.style.backgroundColor = 'rgb(185, 206, 154)';
            } else {
                firstName.style.backgroundColor = 'red';
            }
        })
        lastName.addEventListener('keyup', () => {
            if((lastName.value.match(/^[A-Za-z]*$/)&&lastName.value.length > 0)){
                lastName.style.backgroundColor = 'rgb(185, 206, 154)';
            } else {
                lastName.style.backgroundColor = 'red';
            }
        })

        
    })

    

    const handleChange = (event) => {
        setValues({...values, [event.target.name]:[event.target.value]})
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        var validEmail;
        var validLastName;
        var validFirstName;
        var validPassword;
        if (values.email[0]&&values.password[0]&&values.first_name[0]&&values.last_name[0]) {
            if (values.email[0].match(/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}$/)) {
                validEmail = true;
            } else validEmail = false;
            if (values.password[0].length > 6) {
                validPassword = true;
            } else validPassword = false;
            if (values.first_name[0].match(/^[A-Za-z]*$/)&&values.first_name[0].length > 0) {
                validFirstName = true;
            } else validFirstName = false;
            if (values.last_name[0].match(/^[A-Za-z]*$/)&&values.last_name[0].length > 0) {
                validLastName = true;
            } else validLastName = false
        } else {
            alert('Uh oh! Please make sure all fields are valid and try again!')
            return;
        }

        if (validEmail&&validFirstName&&validLastName&&validPassword) {
            axios.post('https://jdmx.onrender.com/signup', {first_name: values.first_name[0], last_name: values.last_name[0], email: values.email[0], password: values.password[0]})
        .then(res => {
            console.log('Success!')

            localStorage.setItem("username", values.first_name[0])
            localStorage.setItem("id",  res.data.insertId)
            window.location.href = '/'
        })
        .catch(err => console.log(err))
        } else {
            console.log('please make sure ALL fields are valid')
        }
        
    }
    
  return (
    <div>
      <div>
        <form onSubmit={handleSubmit} className='signup_section'>
          <h4>Welcome</h4>
          <label for="signup_email">EMAIL ADDRESS*</label>
          <input type="text" id="signup_email" name="email" placeholder="Example@gmail.com" onChange={handleChange} />
          <label for="signup_first_name">FIRST NAME*</label>
          <input type="text" id="signup_first_name" name="first_name" placeholder="FIRST NAME" onChange={handleChange} />
          <label for="signup_last_name">LAST NAME*</label>
          <input type="text" id="signup_last_name" name="last_name" placeholder="LAST NAME" onChange={handleChange} />
          <label for="password">PASSWORD*</label>
          <input type="password" id="password" name="password" placeholder="PASSWORD" onChange={handleChange} />
          <button type='submit' id='signup_btn'>SIGN UP</button>
          <a id='login_route' href='login'>Already have an account? Login</a>
          </form>
    </div>
    </div>
  )
}

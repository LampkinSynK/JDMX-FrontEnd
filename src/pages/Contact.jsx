import React from 'react'
import '../stylesheets/contact.css'
import { useEffect } from 'react'

export default function Home() {
  useEffect(() => {
    const firstName = document.getElementById('fname');
    const lastName = document.getElementById('lname');
    const email = document.getElementById('email');
    const phoneNumber = document.getElementById('p_num');
    const message = document.getElementById('message');
    var firstNameValid = null;
    var lastNameValid = null;
    var emailValid = null;
    var phoneNumberValid = null;

    firstName.addEventListener('keyup', function(){
      var nameValue = firstName.value;
      if (nameValue.match(/^[A-Za-z]*$/)) {
          firstName.style.backgroundColor = 'rgb(185, 206, 154)';
          firstNameValid = true;
      }
      else {
          firstName.style.backgroundColor = 'red';
          firstNameValid = false;
      }
  })
  
  lastName.addEventListener('keyup', function(){
      var lastNameValue = lastName.value;
      if (lastNameValue.match(/^[A-Za-z]*$/)) {
          lastName.style.backgroundColor = 'rgb(185, 206, 154)';
          lastNameValid = true;
      }
      else {
          lastName.style.backgroundColor = 'red';
          lastNameValid = false;
      }
  })
  
  email.addEventListener('keyup', function(){
      var emailValue = email.value;
      if (emailValue.match(/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}$/)) {
          email.style.backgroundColor = 'rgb(185, 206, 154)';
          emailValid = true;
      }
      else {
          email.style.backgroundColor = 'red';
          emailValid = false;
      }
  })
  
  phoneNumber.addEventListener('keyup', function(){
      var phoneValue = phoneNumber.value;
      if (phoneValue.match(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im)) {
          phoneNumber.style.backgroundColor = 'rgb(185, 206, 154)';
          phoneNumberValid = true;
      }
      else {
          phoneNumber.style.backgroundColor = 'red';
          phoneNumberValid = false;
      }
  })
  })
  return (
    <div class="chat_form">
        <form>
            <h1 class="contact_header">Contact Us</h1>
            <div class="full_name">
                <label for="fname">YOUR NAME*</label>
                <div class="forms">
                    <input type="text" id="fname" name="fname" placeholder="John" /><br/><br/>
                    <input type="text" id="lname" name="lname" placeholder="Doe" /><br/><br/>
                </div>
            </div>
            <label for="email">EMAIL ADDRESS*</label>
            <input type="text" id="email" name="email" placeholder="Eg. Example@gmail.com" /><br/><br/>
            <label for="p_num">PHONE NUMBER*</label>
            <input type="text" id="p_num" name="p_num" placeholder="Eg. (XXX)XXX-XXXX" /><br/><br/>
            <label for="message">MESSAGE*</label>
            <input type="text" id="message" name="message" placeholder="Please enter your comments..." /><br/><br/>
            <input id="submit_btn" type="submit" value="Send"  onclick="isValid()" />
          </form>
    </div>
  )
}

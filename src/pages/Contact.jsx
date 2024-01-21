import React from 'react'
import '../stylesheets/contact.css'

export default function Home() {
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

import React from 'react'
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Nav() {
  useEffect(() => {
    const userInfo = document.getElementById('userlogin')
    if (!localStorage.getItem('username')) {
      return;
    } else {
      userInfo.textContent = localStorage.getItem('username');
    }
  })

    function mobiletab() {
        var x = document.getElementById("myLinks");
        if (x.style.display === "block") {
          x.style.display = "none";
        } else {
          x.style.display = "block";
        }
      }
  return (
    <div>
      <header>
    {/* <!-- Navbar --> */}
    <nav class="navbar" id="navbar">
        <a></a>
        <a href="/"><img src="images/JDMX_Logo.png" alt="JDMXHome" class='logo' width="100px" height="100px" /></a>
        <a className="nav_items_right" href="/">Home</a>
        <a className="nav_items" href="inventory">Vehicles</a>
        <a className="nav_items" href="contact">Support</a>
        <div className="search_icon"><Link to={"/cart?user=" + localStorage.getItem('id')}><img src="assets/cart.png" width="50px" height="50px" alt="search" /></Link></div>
        
        <a class="login_icon" href="login"><img src="assets/usericon.png" width="30px" alt="login" /><p id='userlogin'>guest</p></a>
    </nav>
    {/* <!-- Mobile Nav --> */}
    <nav className="navbar" id="mobilenav"> 
        <div className="flex_nav">
            <a href="javascript:void(0);" class="icon" onClick={mobiletab}><img src="assets/hamburger.png" alt="hamburger" height="50px" width="50px" /></a>
        <a href="/" className="active"><img src="images/JDMX_Logo.png" alt="logo" width="100px" height="100px" /></a>
        </div>
        <div id="myLinks">
        <a href="/">Home</a>
        <a href="contact">Contact</a>
        <a href="inventory">Inventory</a>
        <a href="terms">Terms & Conditions</a>
        <a href="login">Login/Signup</a>
  </div>
  <a href="javascript:void(0);" className="icon" onClick={mobiletab}></a>
    </nav>
</header>
    </div>
  )
}

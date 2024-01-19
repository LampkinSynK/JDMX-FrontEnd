import React from 'react'
import { useEffect } from 'react';

export default function Nav() {
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
        <a class="nav_items_right" href="inventory#all">Vehicles</a>
        <a class="nav_items" href="inventory#import">Import</a>
        <a class="nav_items" href="inventory#trending">Trending</a>
        <a class="nav_items" href="contact.html">Support</a>
        <a class="search_icon" href="#"><img src="assets/search.png" width="25px" alt="search" /></a>
        <a class="login_icon" href="login.html"><img src="assets/usericon.png" width="30px" alt="login" /></a>
    </nav>
    {/* <!-- Mobile Nav --> */}
    <nav class="navbar" id="mobilenav"> 
        <div class="flex_nav">
            <a href="javascript:void(0);" class="icon" onClick={mobiletab}><img src="assets/hamburger.png" alt="hamburger" height="50px" width="50px" /></a>
        <a href="/" class="active"><img src="images/JDMX_Logo.png" alt="logo" width="100px" height="100px" /></a>
        </div>
        <div id="myLinks">
        <a href="/">Home</a>
        <a href="contact">Contact</a>
        <a href="inventory">Inventory</a>
        <a href="terms">Terms & Conditions</a>
  </div>
  <a href="javascript:void(0);" class="icon" onClick={mobiletab}></a>
    </nav>
</header>
    </div>
  )
}

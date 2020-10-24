import React from 'react'
import "./CSS/Header.css"
import Grabquick from "./Grabquick.png"
import Background from './Background.png'
import {Link} from "react-router-dom";


function Header() {


window.onscroll = myFunction()

function myFunction(){
  debugger
const navbar = document.getElementsByTagName("header");
const sticky = navbar.offsetTop;
  if (window.pageYOffset >= sticky) {
    navbar.classList.toggle("sticky")
  } else {
    // navbar.classList.ree("sticky");
  }
}




    return (
      
        <div>
        
        <header 
        onScroll ={myFunction()}
        >
       
        <img
        className="logo" 
        src= {Grabquick} 
        alt="logo"
        />
          <nav  className="menu">
            <ul className="nav-link" id="topnav">
                 <li>Home</li>
                 <li>About</li>
                 <li>Contact</li>
                 
                <Link to="/register">
                <li className = "register">
                  Register  
                </li>
                </Link> 
                <Link to = "/login"> 
                 <li
                 className ="login"
                 >
                 Log In
                 </li>
                 </Link>
            </ul>     
          </nav>  
        </header>

      <div className="background">
      <img
      className ="image"
      src ={Background}
      alt ="Background"
      />
      <p className="img_text">ORDER FOOD <br/>  FROM YOUR FAVOURITE RESTAURANTS</p>
      </div>
    </div>
    )
}

export default Header

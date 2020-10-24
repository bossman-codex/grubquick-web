import React from 'react'
import Grubquick from './Grabquick.png'
import './CSS/Registerheader.css' 
import {Link} from "react-router-dom";

function Loginheader() {
    return (
        
        <div>
        <nav className="my_nav">
            <Link to="/">
             <img
              src={Grubquick}
              alt="logo"
              className="img"
              /></Link>

             <div className ="header">
              <h3>Pricing</h3>
              <Link to="/register">
              <h3>Register</h3>
              </Link>
              <h3>FAQ</h3>
              <h3>About</h3>
             </div>
          
             </nav>
        </div>
    )
}

export default Loginheader

import React from 'react'
import "./CSS/footer.css"
import Grubquick from './Grabquick.png'

function Footer() {
    return (
        <div className="footerbar">
            <div>
              <img
              src ={Grubquick}
              alt="logo"
              />
            </div>

            <div>
              <h4>Send A Mail</h4>
              <p>Info@dewltech.ng</p>
            </div>

            <div>
              <h4>Visit us @:</h4>
               <p>shasha ,lagos</p>
            </div>

            <div>
              <h4>Call Us</h4>
              <p>(234) 809 951 4739</p>
              <p>(234) 815 095 4794</p>
            </div>
        </div>
    )
}

export default Footer

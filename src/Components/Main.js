import React from 'react'
import "./CSS/Main.css"
import order from "../images.jpeg"
import delivery from  "../delivery2.png"
import rest from "../resr.png"
import location from "./location.png"

function Main() {
    return (
        <div>
            <h3 className = "heading">HOW IT WORKS</h3>

         <section className="sections">
         <div className="rest">
          <img
         src ={rest}
         alt="greetings"
         className="rest_img"
         />
         <p>Pick A <br/> Restaurant</p>
         </div>

         <div className="order">
         <img
         src ={order}
         alt="greetings"
         className="order_img"
         />
         <p>Choose A <br/> Meal</p>
         </div>

         <div className="delivery">
         <img
         src ={delivery}
         alt="greetings"
         className="delivery_img"
         />
         <p>Recieve it<br/> At Your Doorstep</p>
      
         </div>
        
         </section>  

         <section className="second_section">
         <div className="local">
          <h3>Local Restuarants</h3>
          <p>Grubquick is an application that provide foods<br/> from various local restaurants of your chioce</p>
         </div> 
         
         <div className="meals">
            <h3>Order Meals</h3>
            <p>Grubquick makes it possible for costomers to<br/> order food from any or preferred restaurants</p>
         </div>
         </section>
          <div className="register_button">
            <img
            src ={location}
            alt="greetings"
            />
            <p>GrubQuick offers registration to local restaurants.<br/>For more enquiries send us a message</p>
            <button classname="btn">Register Now</button>
          </div>
           
        </div>
    )
}

export default Main

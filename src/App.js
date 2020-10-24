import React from 'react';
import {BrowserRouter as Router , Switch,Route} from "react-router-dom";
import './App.css';
import Footer from './Components/Footer';
import Header from "./Components/Header"
import Login from './Components/Login';
import Main from "./Components/Main"
import Register from './Components/Register';
import Registerheader from './Components/Registerheader';
import Loginheader from "./Components/Loginheader"


function App() {
  return (
    <div className="App">
    <Router>
     <Switch>
          <Route path="/register">
            <Registerheader/>
            <Register/>
          </Route>

          <Route path="/login">
            <Loginheader/>
             <Login/>
          </Route>


          <Route path= "/">
            <Header/>
            <Main/>
            <Footer/>
          </Route>

          
        </Switch>
        </Router>
    </div> 
    
  );
}

export default App;

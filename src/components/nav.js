import React, { Component } from 'react';
import { BrowserRouter as Link } from "react-router-dom"
import { MDBNavbarBrand } from "mdbreact";
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'
import '../App.css';

import 'bootstrap/dist/css/bootstrap.min.css';


  class App extends Component {
   
    render(){
      return (
        <div>
            <nav id="navbar" class=" navbar navbar-expand-lg navbar-light bg-light" scrolling>
                <MDBNavbarBrand>
                    < img  className = ""  src = " img/logocooking.png "  alt = " logo " height="60px"/>
                    <span id="good">Good Cooking</span>
                </MDBNavbarBrand>
              <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
    
              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                  <li class="nav-item active">
                    <Link to="/"><span id="couleur" >Acceuil</span></Link> <span class="sr-only">(current)</span>
                  </li>
                  <li class="nav-item active">
                    <Link to="/actualiter"><span id="couleur" >Atelier</span></Link> <span class="sr-only">(current)</span>
                  </li>
                  <li class="nav-item active">
                   <a href="#bat"><span id="couleur" >Contact</span></a><span class="sr-only">(current)</span>
                  </li>
                  <li class="nav-item active">
                  <a href="#bat"><span id="couleur" >Apropos</span></a> <span class="sr-only">(current)</span>
                  </li>
                </ul>
              </div>
            </nav>
          
        </div>
    
    
      );
    }
  
}


export default App;

import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import { MDBNavbarBrand } from "mdbreact";
import Login from './components/login'
import Acceuil from './components/Acceuil'
import Register from './components/register'
import { Provider } from 'react-redux';
import store from './store';
import Footer from './components/Footer/footer';
import Dashboard from './components/AtelierAdmin';
import Slide from './components/Acceiul/slide';
import Card from './components/cardAcceuill';
import Actualier from './components/Acceiul/actualite';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';


  class App extends Component {
   
    render(){
      return (
        <div>
          <Provider store = { store }>
          <Router>
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
            <div className="container">
                <div className="col-md-8"> </div>
                <div className="md-form my-0">
                    {/* <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" /> */}
                </div>
              </div>
            
           
            {/* <Route path="/"  exact component={ Atelier} /> */}
            <Route path="/"  exact component={ Slide} />
            <Route path="/"  exact component={ Card } />
            <Route path="/"  exact component={Acceuil} />
            <Route path="/actualiter"  exact component={ Actualier } />
            <Route path="/login"  component={Login} />
            { <Route path="/register" exact component={Register} /> }
            <Route path="/admin" component={Dashboard} />
             <div id="bat">
                  <Footer />
              </div>
          </Router>
          </Provider>
          
        </div>
    
    
      );
    }
  
}


export default App;

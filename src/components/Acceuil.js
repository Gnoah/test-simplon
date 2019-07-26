import React, { Component } from 'react';
import axios from 'axios';
import { MDBRow, MDBCol, MDBCard, MDBCardImage, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardFooter } from "mdbreact";
import Inscrire from './inscrireModal'
import 'react-confirm-alert/src/react-confirm-alert.css'
import './components.css'

// import Modal from './modal';
export default class Acceuil extends Component {
  constructor(props) {
    super(props);

    this.state = {
        profil: [],
        nom:"",
        prenom:"",
        email:"",
        telephone:""
    };
    this.handleChange = this.handleChange.bind(this);

}
componentDidMount() {    
    axios.get('https://simplontest04.herokuapp.com/atelier').then(res => {
       
        this.setState({ profil: res.data })
        console.log("state" +this.state.profil)

    })
    .catch(function (error) {
      console.log(error);
  })
}

handleChange(e){
    this.setState({
        [e.target.name]: e.target.value
    })
}
render() {
  
    
    return (
    <MDBRow>
    {this.state.profil.length>0 ?(this.state.profil.filter(pro=>pro.visibilite==true).map(menu=>{
      return(
   <MDBCol lg="3" md="4" className="mb-lg-0">
        <MDBCard wide ecommerce>
            <MDBCardImage
              cascade
              src={"https://simplontest04.herokuapp.com/public/"+menu.image}
              top
              alt="sample photo"
            />
            <MDBCardBody cascade  placement="top"
                    tag="a"
                    component="i"
                    componentClass="fa fa-eye grey-text ml-3"
                    tooltipContent="Quick look"
                    className="text-center">
              <MDBCardTitle>
                <strong id="color">
                    <h2 id="tex">{menu.titre}</h2>
                </strong>
                    <p>Date: { menu.date }</p>
                    <p>Heure: { menu.horaire } heures</p>
                    <p>Durée: { menu.duree } heures</p>
                    <p>Nombre de place disponible: {menu.placedispo}</p>
                    <p>Place reservées: {menu.placereserve}</p>
              </MDBCardTitle>
              <MDBCardText>
                <h6>{menu.description}</h6>
              </MDBCardText>
              <MDBCardFooter className="px-1">
                <span className="float-left font-weight-bold">
                  <strong>{menu.prix} Ariary</strong>
                </span>
                <span className="float-right">
                </span>
              <div className="">
              <Inscrire id={menu._id} />

              </div>
              </MDBCardFooter>
                
            </MDBCardBody>
          </MDBCard>
                 
      </MDBCol>
      )})):""} 
    </MDBRow>
              
            
        )
    }
}

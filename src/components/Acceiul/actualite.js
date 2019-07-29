import React, { Component } from 'react';
import axios from 'axios';
import { MDBRow, MDBCol, MDBCard, MDBCardImage, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardFooter } from "mdbreact";
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css';
import {
  Button,
  Label,
  Input
} from 'reactstrap';
import '../components.css';

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
              <Button class=" inscr btn btn-primary" onClick={()=>{
                confirmAlert({
                    customUI: ({ onClose }) => {
                      return (
                        <div id="confirm2" className='custom-ui'>
                        <Label for="item">Inscrire sur Atelier</Label>
                        <Input id="input" name="nom" onChange={ this.handleChange } placeholder="Entrer votre nom" value={this.state.value}/>
                        <Input id="input" name="prenom" onChange={ this.handleChange }  placeholder="Entrer votre prenom"v alue={this.state.value}/>
                        <Input id="input" name="email" onChange={ this.handleChange } placeholder="Entrer votre email" value={this.state.value}/>
                        <Input id="input" name="telephone" onChange={ this.handleChange } placeholder="Entrer votre numero telephone"/>   
                          <button  className=" btn btn-secondary BOU1"onClick={onClose}>Fermer</button>
                          <button
                            onClick={() => {
                                axios.post("https://simplontest04.herokuapp.com/particulier/"+ menu._id,{
                                    nom:this.state.nom,
                                    prenom:this.state.prenom,
                                    email:this.state.email,
                                    telephone:this.state.telephone
                                }).then(res=>{
                                  axios.get("https://simplontest04.herokuapp.com/atelier").then(res => {
           
            this.setState({ profil: res.data })
            console.log(this.state.profil)
  
        })
                                  console.log(res.data);
                                })
                              onClose();
                            }}
                          className="btn btn-success">
                          Participer
                          </button>
                        </div>
                      );
                    }
                  });
                 }}  className="  btn BOU1" >S'inscrire</Button>

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

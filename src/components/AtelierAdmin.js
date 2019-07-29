import React, { Component } from 'react'
import axios from 'axios';
import { MDBRow,MDBInput,MDBCol,MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardFooter } from "mdbreact";
import { Redirect } from 'react-router-dom'
import { withRouter} from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logoutUser } from '../actions/authentificate';
import { Button } from 'reactstrap';
import ReactImageMagnify from 'react-image-magnify';
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse } from "mdbreact";
import './components.css'
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css';

 class Admin extends Component {
    constructor(props) {
        super(props);

        this.state = {
            nom:"",
            titre:"",
            description:"",
            horaire:"",
            duree:"",
            placedispo:"",
            placereserve:0,
            prix:"",
            image: '',
            redirect:false,
            atelier:[],
            name:""
        };

        this.handleUploadImage = this.handleUploadImage.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    setRedirect = () => {
        this.setState({
          redirect: true
        })
      }
      renderRedirect = () => {
        if (this.state.redirect) {
          return <Redirect to='/' />
        }
      }
    
    handleChange(e){
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleUploadImage(ev) {
        ev.preventDefault();

        const data = new FormData();
        data.append('image', this.uploadInput.files[0]);
        data.append('titre', this.state.titre);
        data.append('description', this.state.description);
        data.append('date', this.state.date);
        data.append('horaire', this.state.horaire);
        data.append('placedispo', this.state.placedispo);
        data.append('placereserve', this.state.placereserve);
        data.append('prix', this.state.prix);
        data.append('duree',  this.state.duree);
                                                                                                                                                              
        fetch('https://simplontest04.herokuapp.com/cuisinier/'+ localStorage.getItem('id'), {
            method: 'POST',
            body: data,
        }).then((response) => {
            response.json().then((body) => {
             
                console.log(body.file1)
                //  this.setRedirect()
                axios.get('https://simplontest04.herokuapp.com/cuisinier/'+ localStorage.getItem('id')).then(res=>{
            console.log(res.data)
            this.setState({atelier:res.data})
        })
            });
        });
       
    }

    componentDidMount(){
      
        this.setState({name:localStorage.getItem('jwtToken')})
        console.log(localStorage.getItem('jwtToken'))
        axios.get('https://simplontest04.herokuapp.com/cuisinier/'+ localStorage.getItem('id')).then(res=>{
            console.log(res.data)
            this.setState({atelier:res.data})
        })

    }
    render() {

        return (
            <div>
                <MDBNavbar color="red" dark expand="md" style={{ marginTop: "1px" }} id="navbar" className="fixed-top" scrolling > 
                <MDBNavbarBrand>
                    < img  className = ""  src = " img/logocooking.png "  alt = " logo " height="60px"/>
                    <span id="good">Good Cooking</span>
                </MDBNavbarBrand>
                    <MDBCollapse id="navbarCollapse3" isOpen={this.state.collapseID} navbar> 
                    <MDBNavbarNav left>
                    <MDBNavItem> 
                        <MDBNavLink to="/" className="nav-header">Acceuil</MDBNavLink>
                    </MDBNavItem>
                    <MDBNavItem>
                        <MDBNavLink to="/actualiter" className="nav-header">Actualiter</MDBNavLink>
                    </MDBNavItem>
                </MDBNavbarNav> 
                <MDBNavbarNav right> 
                <MDBNavItem>
                    
                        <MDBNavLink to="/login" className="nav-header" ><button id="decon"  onClick={()=>{
                                   this.props.logoutUser(this.props.history);
                               }}>Deconnecter</button></MDBNavLink> 
                </MDBNavItem> 
                    </MDBNavbarNav> 
                    </MDBCollapse> 
                    </MDBNavbar>
                <div className="">
                <div className="row">
                    <div className="col-md-1">
                    <nav className="sidebar2 position-fixed" id="adminoption">
                    <div className="sidebar-header">
                    <br/>
                    <center><img src="img/logocooking.png" alt="logo" id="imagedash1"/></center><br/>
                            <a  href="#nouvaux" id="li2" className="btn btn-primary">Ajouter atelier</a><br /> 
                            <a className="btn btn-primary" href="#atelier1" id="li1">Mes atelier</a><br/>
                            <button to="/actualiter" id="li1" className="btn btn-primary" href="#"></button>
                            </div> 
                            </nav>
                    </div>
                    <div className="col-md-10">
                    <div id="corp">
                <div className="row">
                    <div className="col-md-5">
                       
                       </div>
                       <div className="col-md-2">
                       </div>
                       <div className="col-md-3">                     
                       </div>
                       <div className="col-md-2">
                       </div>
                </div>
                <div className="row">
                    <div className="col-md-5">
                       
                    </div>
                    <div className="col-md-2">
                        <b>
                            <center>
                                <img src="img/profil.png" alt="logo" id="imagedash"/>
                                <h1 > Bienvenue <span id="tex">{this.state.name}</span></h1> <br></br>
                            </center>
                        </b>
                    </div>
                    <div className="col-md-3">                     
                    </div>
                    <div className="col-md-2">
                    </div>
                    
                </div>
        <div class="">
                <form onSubmit={this.handleUploadImage
                
                }>
                {this.renderRedirect()}
                <div id="nouvaux" class="container">
                <br/><br/>
                <center><h3>Ajouter nouveaux atelier</h3></center>
                <div class="row">
                    <div className="col-md-6">
                        <MDBInput type="text" class="form-control"  name="titre" label="titre"  onChange={ this.handleChange }
                        value={ this.state.titre } required/>
                        <MDBInput type="text" class="form-control"  name="description" label="description" onChange={ this.handleChange }
                        value={ this.state.description } required/>
                        <MDBInput type="date" class="form-control"  name="date" label="date" onChange={ this.handleChange }
                        value={ this.state.date } required/>
                        <MDBInput type="number" class="form-control"  name="horaire" label="horaire" onChange={ this.handleChange }
                        value={ this.state.horaire } required/>
                    </div>
                    <div className="col-md-6">
                        <MDBInput type="Number" class="form-control"  name="duree" label="Duree" onChange={ this.handleChange }
                        value={ this.state.duree } required/>
                        <MDBInput type="Number" class="form-control"  name="placedispo" label="Nombre se place disponible" onChange={ this.handleChange }
                        value={ this.state.placedispo } required/>
                        <MDBInput type="Number" class="form-control"  name="placereserve" label="place reservée" onChange={ this.handleChange }
                        value={ this.state.placereserve } required/>
                        <MDBInput type="Number" class="form-control"  name="prix" label="Prix" onChange={ this.handleChange }
                        value={ this.state.prix } required/>
                         <input ref={(ref) => { this.uploadInput = ref; }} type="file" required name="image"/>
                    </div>
                    <Button color="blue" style={{ marginTop: '2rem' }} block>
                        Publier
                    </Button>
                </div>
                </div>
                </form>

            </div>
            <div id="atelier1">
                <br/>
            <center><h3>Mes atelier</h3></center>
            </div>
            
            <MDBRow>
            <MDBCol md="1"></MDBCol>
            {this.state.atelier.length>0 ?(this.state.atelier.map(prof=>{
                var url="https://simplontest04.herokuapp.com/public/"+prof.image
 return (
    <MDBCol lg="3" md="4" className="mb-lg-0">
    <div className='col-md-3 custom-control custom-switch'>
    <div class="form-check">
    </div>
    </div>
      <MDBCard cascade narrow ecommerce id="x">
      {prof.visibilite == true ?(<button id="visual" onClick={(e)=>{
        e.preventDefault()
        axios.get("https://simplontest04.herokuapp.com/ateliermasquer/"+prof._id).then(res=>{
            axios.get('https://simplontest04.herokuapp.com/cuisinier/'+ localStorage.getItem('id')).then(res=>{
                console.log(res.data)
                this.setState({atelier:res.data})
            })
        console.log(res.data)
    })
    }}><i class="glyphicon glyphicon-minus-sign"></i>Visibilité:Desactiver</button>):(<button id="visual" onClick={(e)=>{
        e.preventDefault()  
        axios.get("https://simplontest04.herokuapp.com/atelieraffichier/"+prof._id).then(res=>{
            axios.get('https://simplontest04.herokuapp.com/cuisinier/'+ localStorage.getItem('id')).then(res=>{
                console.log(res.data)
                this.setState({atelier:res.data})
            })
    }
)

    }}><i class="glyphicon glyphicon-ok"></i>visibilité: Activer</button>)}
    <div className="row"> 
    <div className="col-md-3">       
        </div>
        <div className="col-md-4">
        <Button id="boutton" className="btn-primary"onClick={() => {
                                        confirmAlert({
                                            customUI: ({ onClose }) => {
                                                return (
                                                    <div  id ="confirm"className='custom-ui'>
                                                        <h2 class="card-title">Modification Atelier</h2>
                                                        <input id="input" name="titre" onChange={this.handleChange} placeholder="Entrer votre titre" value={this.state.value} /><br />
                                                        <input id="input" name="description" onChange={this.handleChange} placeholder="Entrer votre description" v alue={this.state.value} /><br />
                                                        <input id="input" name="date" onChange={this.handleChange} placeholder="Entrer votre email" value={this.state.value} type="date" /><br />
                                                        <input id="input" name="horaire" onChange={this.handleChange} placeholder="Entrer votre horaire" /><br />
                                                        <input id="input" name="placedispo" onChange={this.handleChange} placeholder="Entrer place disponible" type="Number" value={this.state.value} /><br />
                                                        <input id="input" name="placereserve" onChange={this.handleChange} placeholder="Entrer place reserve" type="Number" alue={this.state.value} /><br />
                                                        <input id="input"name="prix" onChange={this.handleChange} placeholder="Entrer prix" type="Number" value={this.state.value} /><br />
                                                        <input id="input" name="telephone" ref={(ref) => { this.uploadInput2 = ref; }} type="file" /><br />
                                                        <button onClick={onClose} className=" BOU1 btn btn-secondary">Fermer</button>
                                                        <button
                                                            onClick={() => {
                                                                const data2 = new FormData();
                                                                data2.append('image', this.uploadInput2.files[0]);
                                                                data2.append('titre', this.state.titre);
                                                                data2.append('description', this.state.description);
                                                                data2.append('date', this.state.date);
                                                                data2.append('horaire', this.state.horaire);
                                                                // data.append('duree',  this.state.duree);
                                                                data2.append('placedispo', this.state.placedispo);
                                                                data2.append('placereserve', this.state.placereserve);
                                                                data2.append('prix', this.state.prix);
                                                                data2.append('duree', this.state.duree);

                                                                fetch('https://simplontest04.herokuapp.com/atelieraffichier/'+ prof._id, {
                                                                    method: 'PUT',
                                                                    body: data2,
                                                                }).then((response) => {
                                                                    response.json().then((body) => {

                                                                        console.log(body.file1)
                                                                        //  this.setRedirect()
                                                                        axios.get('https://simplontest04.herokuapp.com/cuisinier/' + localStorage.getItem('id')).then(res => {
                                                                            console.log(res.data)
                                                                            this.setState({ atelier: res.data })
                                                                        })

                                                                    });
                                                                    onClose();
                                                                });




                                                            }}
                                                            className="  BOU btn btn-success">
                                                            Modifier
                                                            </button>
                                                    </div>
                                                );
                                            }
                                        });
                                    }}>Modifier</Button>
        </div>
        <div className="col-md-1"></div>
        <div className="col-md-3">
        <Button className="remove-btn" color="danger" size="sm" id="boutton" onClick={(e)=>{
        e.preventDefault()
        axios.delete("https://simplontest04.herokuapp.com/atelier/"+prof._id).then(res=>{
            axios.get('https://simplontest04.herokuapp.com/cuisinier/'+ localStorage.getItem('id')).then(res=>{
                console.log(res.data)
                this.setState({atelier:res.data})
            })
        console.log(res.data)
    })
    }} >&times;</Button>
        </div>      
    </div>
      <ReactImageMagnify {...{   smallImage: {
                              alt: 'one',
                              isFluidWidth: true,
                              src: url
                          },
                          largeImage: {
                              src: url,
                              width: 800,
                              height: 1200
                          }
                        }} />
      <MDBCardBody cascade className="text-center">
        <MDBCardTitle>
          <strong id="color">
            <h3 id="tex">{ prof.titre }</h3>
          </strong>
        </MDBCardTitle>
        <MDBCardText>
        </MDBCardText>
        <h4>Date: {prof.date}</h4>
        <h5 id="tex">{prof.description}</h5>
        <p>Horaire: {prof.horaire} heure</p>
        <p>Durée: { prof.duree } heure</p>
        <p>Nombre de place disponible: {prof.placedispo}</p>
        <p>Place resrver: {prof.placereserve}</p>
        <MDBCardFooter className="px-1">
          <span className="float-left font-weight-bold">
            <strong>{prof.prix} Ariary</strong>
          </span>
        </MDBCardFooter>
       
      </MDBCardBody>
    </MDBCard>
  </MDBCol>
) }        
              )):""}
            
            </MDBRow>
            </div>
                    </div>
                </div>
                </div>
                <div>
                   
                </div>
            </div>
        );
    }
}


Admin.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    auth: state.auth
})

export default connect(mapStateToProps, { logoutUser })(withRouter(Admin));

{/* <i class="glyphicon glyphicon-minus-sign">&#xe082;</i>
content:"\e082"; */}
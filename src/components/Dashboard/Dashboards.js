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
import Edit from './Dashboard/EditAtelier';
import './components.css'

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
        // data.append('duree',  this.state.duree);
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
                <div className="">
                <div className="row">
                    <div className="col-md-1">
                    <nav className="sidebar2 position-fixed" id="adminoption">
                    <div className="sidebar-header"> 
                    <img src="img/logocooking.png" alt="logo" id="imagedash"/> <br/>
                            
                            <button id="li2" className="btn btn-primary" 
                            onClick={() => { document.getElementById('Ajouter').style.display = 'block'
                            document.getElementById('Lister').style.display = 'none' }} href="#">Ajouter atelier</button><br /> 
                            <button id="li1" className="btn btn-primary" onClick={() => { 
                                document.getElementById('Ajouter').style.display = 'none' 
                                document.getElementById('Lister').style.display = 'block' 
                            }} href="#">Mes ateliers</button> <br/>
                            <button id="li1" className="btn btn-primary" onClick={() => { document.getElementById('ajoutercomponent').style.display = 'none' }} href="#">Tous actualiter</button>
                            </div> 
                            </nav>
                    </div>
                    <div className="col-md-10">
                    <div id="">
                <div className="row">
                    <div className="col-md-5">
                       
                       </div>
                       <div className="col-md-2">
                       </div>
                       <div className="col-md-3">                     
                       </div>
                       <div className="col-md-2">
                               <button onClick={()=>{
                                   this.props.logoutUser(this.props.history);
                               }}>deconnecter</button>
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
                <div class="container">
                <center><h1>Ajouter nouveaux atelier</h1></center>
                <div class="row">
                    <div className="col-md-6">
                        <MDBInput type="text" class="form-control"  name="titre" label="titre"  onChange={ this.handleChange }
                        value={ this.state.titre } required/>
                        <MDBInput type="text" class="form-control"  name="description" label="description" onChange={ this.handleChange }
                        value={ this.state.description } required/>
                        <MDBInput type="date" class="form-control"  name="date" label="date" onChange={ this.handleChange }
                        value={ this.state.date } required/>
                        <MDBInput type="time" class="form-control"  name="horaire" label="horaire" onChange={ this.handleChange }
                        value={ this.state.horaire } required/>
                    </div>
                    <div className="col-md-6">
                        <br/>
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
            <div>
                <br/>
                <center><h3>Mes atelier</h3></center>
            </div>
            
            <MDBRow>
            {this.state.atelier.length>0 ?(this.state.atelier.map(prof=>{
                var url="https://simplontest04.herokuapp.com/public/"+prof.image
 return (
    <MDBCol lg="3" md="4" className="mb-lg-0">
    <div className='col-md-3 custom-control custom-switch'>
    <div class="form-check">
    {/* <input ref="box" name="afficher" id="afficher" type="checkbox" class="custom-control-input" id="customSwitches"/> */}
        <input type="checkbox" class="form-check-input" id="materialChecked2" checked/>
    </div>
    <span>Visibiliter</span>
    {prof.visibilite == true ?(<button onClick={(e)=>{
        e.preventDefault()
        axios.get("https://simplontest04.herokuapp.com/atelieraffichier/"+prof._id).then(res=>{
            
        console.log(res.data)
    })

    }}>Desactiver</button>):(<button onClick={(e)=>{
        e.preventDefault()  
        axios.get("https://simplontest04.herokuapp.com/ateliermasquer/"+prof._id).then(res=>console.log(res.data)
)

    }}>Activer</button>)}
       
    </div>
      <MDBCard cascade narrow ecommerce id="x">
      <Edit id ={prof._id}/>
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
          <a href="#!" data-toggle="tooltip" data-placement="top" title="Ajouter au panier"> 
            <i class="fas fa-shopping-cart grey-text ml-3"></i> 
          </a>
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
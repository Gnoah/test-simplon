
import React, { Component } from 'react';
import { MDBRow, MDBCol, MDBCard, MDBCardBody, MDBBtn} from "mdbreact";
import { MDBInput } from "mdbreact";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { registerUser } from '../actions/authentificate';
//import { Redirect } from 'react-router-dom';
import classnames from 'classnames';

import "bootstrap/dist/css/bootstrap.css"
import 'react-confirm-alert/src/react-confirm-alert.css'

class Register extends Component {
    constructor() {
        super();
        this.state = {
            nom: '',
            prenom:"",
            email: '',
            password: '',
            password_confirm: '',
            errors: {}
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = {
            nom: this.state.nom,
            prenom: this.state.prenom,
            email: this.state.email,
            specialite:this.state.specialite,
            password: this.state.password,
            password_confirm: this.state.password_confirm,
        }
        this.props.registerUser(user, this.props.history);
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.errors) {
            this.setState({
                errors: nextProps.errors
            });
        }
    }

    // renderRedirect = () => { 
    //   if (localStorage.getItem('login') == 'true') { 
    //     return <Redirect to='/admin' /> 
    //   } else { 
    //     console.log('test'); 
    //   } 
    // }
  
    // componentWillReceiveProps(nextProps) {
    //     if(nextProps.auth.isAuthenticated) {
    //         this.props.history.push('/')
    //     }
    //     if(nextProps.errors) {
    //         this.setState({
    //             errors: nextProps.errors
    //         });
    //     }
    // }

    // componentDidMount() {
    //     if(this.props.auth.isAuthenticated) {
    //         this.props.history.push('/');
    //     }
    // }

  render() {
    const { errors } = this.state;
    return (
      <div>
        {/* {this.renderRedirect()} */}
        <div id="corps">
          <MDBRow>
          <MDBCol md="0,5"></MDBCol>
            <MDBCol md="6"  className="mx-auto mt-2">
              <MDBCard>
                <MDBCardBody className="mx-6">

                  <h2 className="text text-primary">S'inscrire</h2>
                  <form onSubmit={ this.handleSubmit }>
                  <div id="name">
                    <MDBInput label="Nom" icon="user" group type="text" validate error="wrong" success="right" 
                    className={classnames('form-control form-control-lg', {'is-invalid': errors.name })} name="nom"
                    onChange={ this.handleInputChange }
                    value={ this.state.nom }/>
                    {errors.name && (<div className="invalid-feedback">{errors.name}</div>)}
                  </div> 
                  <div id="prenom">
                    <MDBInput label="Prenom" group type="text" validate error="wrong" success="right" 
                    className={classnames('form-control form-control-lg', {'is-invalid': errors.name })} name="prenom"
                    onChange={ this.handleInputChange }
                    value={ this.state.prenom }/>
                    {errors.name && (<div className="invalid-feedback">{errors.name}</div>)}
                  </div>
                  <div id="mail">
                    <MDBInput label="email" group type="email" validate error="wrong" success="right" 
                    className={classnames('form-control form-control-lg', {'is-invalid': errors.email })} name="email"
                    onChange={ this.handleInputChange }
                    value={ this.state.email }/>
                    {errors.email && (<div className="invalid-feedback">{errors.email}</div>)}
                  </div>
                  <div id="specialite">
                    <MDBInput label="Spécialité" group type="text" validate error="wrong" success="right" 
                    className={classnames('form-control form-control-lg', {'is-invalid': errors.specialite })} name="specialite"
                    onChange={ this.handleInputChange }
                    value={ this.state.specialite }/>
                    {errors.specialite && (<div className="invalid-feedback">{errors.specialite}</div>)}
                  </div>
                  <div id="Mot de pass">
                    <MDBInput label="Mot de passe" group type="password" validate error="wrong" success="right" 
                    className={classnames('form-control form-control-lg', {'is-invalid': errors.password })}  name="password"
                    onChange={ this.handleInputChange }
                    value={ this.state.password }/>
                    {errors.password && (<div className="invalid-feedback">{errors.password}</div>)}
                  </div>
                  <div id="password2">
                    <MDBInput label="confirmer mot de passe" group type="password" validate error="wrong" success="right" 
                    className={classnames('form-control form-control-lg', {'is-invalid': errors.password_confirm })} name="password_confirm"
                    onChange={ this.handleInputChange }
                    value={ this.state.password_confirm }/>
                    {errors.password_confirm && (<div className="invalid-feedback">{errors.password_confirm}</div>)}
                  </div>
                    <MDBBtn type="submit" gradient="purple" id="bt" ><a>Inscrire</a></MDBBtn>{this.state.message}

                  </form>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          </MDBRow>
        </div>
      </div>

    );
  }
}

Register.propTypes = {
    registerUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
});

export default connect(mapStateToProps,{ registerUser })(withRouter(Register))
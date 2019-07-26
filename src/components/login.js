import React from 'react';
import { MDBRow, MDBCol, MDBInput, MDBBtn, MDBCard, MDBCardBody, MDBModalFooter, MDBIcon } from 'mdbreact';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { loginUser } from '../actions/authentificate';
import { Redirect } from 'react-router-dom';
import classnames from 'classnames';
import './user.css'

class Login extends React.Component {
    constructor() {
        super();
        this.state = {
            email: '',
            password: '',
            errors: {},
          
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    renderRedirect = () => { 
      if (localStorage.getItem('login') == 'true') { 
        return <Redirect to='/admin' /> 
      } else { 
        console.log('test'); 
      } 
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = {
            email: this.state.email,
            password: this.state.password,
        }
        this.props.loginUser(user);
      
         
    }

    componentWillReceiveProps(nextProps) {
        console.log(this.props.auth.isAuthenticated);
        if(nextProps.errors) {
            this.setState({
                errors: nextProps.errors
            });
        }
       
      
    }
    componentDidMount() {
        console.log(this.props);
        
        if(this.props.auth.isAuthenticated)
         {
            this.props.history.push('/admin');
        }
    }



  render() {
    const smallStyle = { fontSize: '0.8rem' }
    const {errors} = this.state;
    return (
      <div className="container">
          {this.renderRedirect()}
          <MDBRow>
          <MDBCol md="0,5"></MDBCol>
            <MDBCol md="6" className="mx-auto mt-2">
              <MDBCard id="card">
                <MDBCardBody className="mx-2">
                <h3 className="dark-grey-text text-center"><strong>Connexion</strong></h3>
                  <form onSubmit={ this.handleSubmit }>
                    <div id="mail">
                      <MDBInput label="Adress email" group type="email" validate error="wrong" success="right" 
                      className={classnames('form-control form-control-lg', {'is-invalid': errors.email })} name="email"
                      onChange={ this.handleInputChange }
                      value={ this.state.email }/>
                    {errors.email && (<div className="invalid-feedback">{errors.email}</div>)}
                    </div>
                    <div id="password">
                      <MDBInput label="Mot de passe" group type="password" validate containerClass="mb-0" 
                      className={classnames('form-control form-control-lg', {'is-invalid': errors.password })} name="password"
                      onChange={ this.handleInputChange }
                      value={ this.state.password }/>
                      {errors.password && (<div className="invalid-feedback">{errors.password}</div>)}
                    </div>
                    <div className="text-center pt-3 mb-3" id="mail2">
                      <MDBBtn type="submit" gradient="purple" id="bt" ><a >connexion</a></MDBBtn>
                    </div>

                    <div className="row my-3 d-flex justify-content-center" id="mail3">
                      <p className="dark-grey-text text-right d-flex justify-content-center mb-3 pt-2" style={smallStyle}> or Sign up with:</p>
                      <MDBRow>
                        <MDBCol md="4">
                          <MDBBtn type="button" color="white" rounded className="mr-md-3 z-depth-1a"><MDBIcon fab icon="facebook-f" className="blue-text text-center" /></MDBBtn>
                        </MDBCol>
                        <MDBCol md="4">
                          <MDBBtn type="button" color="white" rounded className="mr-md-3 z-depth-1a"><MDBIcon fab icon="twitter" className="blue-text" /></MDBBtn>
                        </MDBCol>
                        <MDBCol md="4">
                          <MDBBtn type="button" color="white" rounded className="z-depth-1a"><MDBIcon fab icon="google-plus-g" className="blue-text" /></MDBBtn>
                        </MDBCol>
                      </MDBRow>
                    </div>
                  </form>
                 
                </MDBCardBody>
                <MDBModalFooter className="mx-5 pt-3 mb-1" id="mail4">
                  <p className="grey-text d-flex justify-content-end" style={smallStyle}>Already a member? <a href="#!" className="blue-text ml-1"> Sign In</a></p>
                </MDBModalFooter>
              </MDBCard>
            </MDBCol>
          </MDBRow>
      </div>
    );
  }
}

Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors
})

export  default connect(mapStateToProps, { loginUser })(Login)
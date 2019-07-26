import React from 'react';
import { MDBCard, MDBCardTitle, MDBRow, MDBCol, MDBIcon } from 'mdbreact';
import './components.css';

const CardExample = () => {
  return (
    <MDBRow id="card1">
      <MDBCol>
        <div></div>
        <MDBCard className="card-image" style={{
              backgroundImage: "url('/img/0.jpg')"
            }}>
          <div className="text-white text-center d-flex align-items-center rgba-black-strong py-5 px-4">
            <div>
              <h5 className="yellow-text">
                <MDBIcon icon="" />Bienvenue chez nous
              </h5>
              <MDBCardTitle tag="h3" className="pt-2">
                <strong>Crep vegetarien</strong>
              </MDBCardTitle>
              <p>
              Good cooking vous ivitez toujour de suivez nos page est vous voyez baucoup de atelier ici
              </p>{/* 
              <MDBBtn color="pink">
                <MDBIcon icon="clone left" /> View project
              </MDBBtn> */}
            </div>
          </div>
        </MDBCard>
      </MDBCol>
      <MDBCol>
        <MDBCard className="card-image" style={{
              backgroundImage:
                "url('/img/1.jpg')"
            } }>
          <div className="text-white text-center d-flex align-items-center rgba-indigo-strong py-5 px-4">
            <div>
              <h5 className="yellow-text">
                <MDBIcon icon="" /> Shandwich 
              </h5>
              <MDBCardTitle tag="h3" className="pt-2">
                <strong>Au frome et Porc</strong>
              </MDBCardTitle>
              <p>           
              Emblèmes de la Belgique, vous connaissez. Mais qu’en est-il des gaufres salées ?
              </p>{/*
              <MDBBtn color="deep-orange">
                 <MDBIcon icon="clone left" /> View project 
              </MDBBtn>*/}
            </div>
          </div>
        </MDBCard>
      </MDBCol>
      
    </MDBRow>
  )
}

export default CardExample;
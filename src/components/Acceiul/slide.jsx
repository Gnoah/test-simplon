import React, { Component } from "react";
import './slide.css';
import { Animation, MDBCarousel, MDBCarouselCaption, MDBCarouselInner, MDBCarouselItem, MDBView, MDBMask } from
"mdbreact";

class Home extends Component {
  render() {
    return (
      <MDBCarousel id="slid" activeItem={1} length={4} showControls={true} showIndicators={true} className="z-depth-1">
        <MDBCarouselInner>
          <MDBCarouselItem itemId="1">
            <MDBView>
              <img className="d-block w-100 image" src="img/2aa.jpg" alt="First slide" height=""/>
              <MDBMask overlay="black-slight" />
            </MDBView>
            <MDBCarouselCaption>
              <Animation type="zoomInUp" duration="2s">
                <h3 className="h3-responsive">"Pendant mon année de végétarisme, j’ai eu la chance de découvrir plusieurs bons restos qui servaient de tout sauf de la viande. Voici mes belles trouvailles.."</h3>
                <p>Resette vegetarien</p>
              </Animation>
            </MDBCarouselCaption>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="2">
            <MDBView>
            
              <img className="d-block w-100 image" src="img/enfant.jpg" alt="Second slide" />
              <MDBMask overlay="black-slight" />
            </MDBView>
            <MDBCarouselCaption>
              <Animation type="zoomInUp" duration="3s">
                <h3 className="">"France 3 lance une émission de cuisine spéciale Normandie et cherche des enfants candidats"</h3>
                <p>Cool</p>
              </Animation>
            </MDBCarouselCaption>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="3">
            <MDBView>
              <img className="d-block w-100 image" src="img/1aa.jpg"  width="700px" alt="Third slide" />
              <MDBMask overlay="black-slight" />
            </MDBView>
            <MDBCarouselCaption>
              <Animation type="zoomInUp" duration="3s">
                <h3 className="h3-responsive">""</h3>
                <p></p>
                </Animation>
            </MDBCarouselCaption>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="4">
            <MDBView>
              <img className="d-block w-100 image" src="img/4aa.jpg" alt="Burnedforest" />
              <MDBMask overlay="black-slight" />
            </MDBView>
            <MDBCarouselCaption>
              <Animation type="zoomInUp" duration="3s">
                <h3 className="h3-responsive">"Au déjeuner, en soirée entre amis ou un truc à grignoter en bossant, il y a la pizza."</h3>
                <p>Pizza</p>
              </Animation>
            </MDBCarouselCaption>
          </MDBCarouselItem>
        </MDBCarouselInner>
      </MDBCarousel>
    
    );
  }
}

export default Home;

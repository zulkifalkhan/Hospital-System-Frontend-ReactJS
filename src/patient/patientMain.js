import "../home/home.css"
import React  from "react";
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import { MDBCarousel, MDBFooter,MDBCarouselInner, MDBCarouselItem, MDBView, MDBContainer,MDBInput,MDBBtn,MDBRow,MDBCol,MDBCard,MDBCardBody,MDBCardImage,MDBCardText,MDBCardTitle} from "mdbreact";
import SidenavP from "./sidenavP"
import P1 from "./p1.jpg";
import P2 from "./p2.jpg";
import P3 from "./p3.jpg";
import {createBrowserHistory} from 'history';


const history = createBrowserHistory({basename : `${process.env.PUBLIC_URL}`});




function PatientMain (props){

  const search = props.location.search; // returns the URL query String
  const params = new URLSearchParams(search); 
  const IdFromURL = params.get('id'); 


  return (
      <div>
<div className="bgr">
<div>
    <SidenavP id={IdFromURL} />
    </div>
<h1 style={{color:'#4863A0',textAlign:'center',fontSize:'5vh'}}>PATIENT PORTAL</h1>
<MDBContainer>
      <MDBCarousel
        activeItem={1}
        length={3}
        showControls={false}
        showIndicators={false}
        className="z-depth-1"
        slide
        className="pad"
      >
        <MDBCarouselInner>
          <MDBCarouselItem itemId="1">
            <MDBView >
              <img
                className="d-block  w-100"
                src={P1}
                alt="First slide"
              />
            </MDBView>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="2">
            <MDBView>
              <img
                className="d-block w-120"
                src={P2}
                alt="Second slide"
                class="img-fluid"
              />
            </MDBView>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="3">
            <MDBView>
              <img
                className="d-block w-120"
                src={P3}
                alt="Third slide"
                class="img-fluid"
              />
            </MDBView>
          </MDBCarouselItem>
        </MDBCarouselInner>
      </MDBCarousel> 

    </MDBContainer>

    </div>

</div>

 
  );

};

export default PatientMain;
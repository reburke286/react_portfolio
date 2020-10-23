import React from "react";
import { MDBCol, MDBContainer, MDBRow} from "mdbreact";
import "./pages.css";
import Neil from "./images/Neil.jpeg";
import tenK from "./images/10k.jpeg";
import Coffee from "./images/CoffeeSelfie.jpeg";
import BecandKate from "./images/BecandKate.jpeg";


const About = () => {
return (
<MDBContainer>
<MDBContainer className="container z-depth-1-half">
  <MDBRow className="mt-0">
    <h1 className="ml-5">About Me</h1>
  </MDBRow>

  <MDBRow className="mx-4 my-2">
    <h5>Like many clueless college students, I majored in what I was interested in - and then never got a career in it. I landed myself in food service management and have managed a coffee shop from 2012 to 2019. Don't get me wrong - it's fun! It makes you endlessly problem solve, be efficient and creative with your resources, and most of all, learn how to get along with everyone. But after 8 years in this industry, I'd like to move on.</h5>
  </MDBRow>

  <MDBRow className="mx-4 my-4">
    <h5>I found my interest of software engineering suddenly. I thought I'd never want to sit in front of a screen all day, but people change. Now I'm learning to develop and loving how challenging it is. It's frustrating and demanding and incredibly rewarding when you get it right. You enjoy that feeling for about 4 minutes and then move on to the next! Please enjoy this site and see a little bit of what I've been up to for the past 6 months. And then go ahead and reach out with that job offer.</h5>
  </MDBRow>

  <MDBRow>
    <MDBCol md="3">
      <img src={tenK} className="img-fluid .z-depth-1-half" alt="10k"></img>
    </MDBCol>
    <MDBCol md="3">
      <img src={Neil} className="img-fluid .z-depth-1-half" alt="Neil"></img>
    </MDBCol>
    <MDBCol md="3">
      <img src={Coffee} className="img-fluid .z-depth-1-half" alt="Coffee"></img>
    </MDBCol>
    <MDBCol md="3">
      <img src={BecandKate} className="img-fluid .z-depth-1-half" alt="BecandKate"></img>
    </MDBCol>
  </MDBRow>
</MDBContainer>
</MDBContainer> 
);
}

export default About;
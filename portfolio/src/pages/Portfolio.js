import React from 'react';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBRow, MDBCol, MDBView, MDBIcon, MDBContainer } from 'mdbreact';
import Burger from "./images/BurgerThumbnail.JPG";
import DayPlanner from "./images/DayPlannerThumbnail.JPG";
import Domains from "./images/DomainNames.png";
import Spokeo from "./images/SpokeoThumbnail.jpg";
import Weather from "./images/WeatherThumbnail.JPG";
import Workout from "./images/WorkoutThumbnail.JPG";


const Portfolio = () => {
  return (
    <MDBContainer style={{height:"1400px"}}>
    <MDBRow>
      <MDBCol md='4'>
        <MDBCard narrow>
          <MDBView cascade>
            <MDBCardImage
              hover
              overlay='white-slight'
              className='card-img-top'
              src={Spokeo}
              alt='spokeo'
            />
          </MDBView>

          <MDBCardBody>
            <h5 className='pink-text'>
              <MDBIcon fab icon='react' /> React, Chrome Extension
            </h5>

            <MDBCardTitle className='font-weight-bold'>
              Spokeo Chrome Extension
            </MDBCardTitle>

            <MDBCardText>
            Interned for Spokeo and helped build their first Chrome Extension using Chrome API, Spokeo search engine, and React for UI. Built custom regex to scrape static and dynamic web pages.
            </MDBCardText>

            <MDBBtn color='unique'>Visit Github</MDBBtn>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>

      <MDBCol md='4'>
        <MDBCard narrow>
          <MDBView cascade>
            <MDBCardImage
              hover
              overlay='white-slight'
              className='card-img-top fluid-img'
              src={Burger}
              alt='burger'
              style={{height:"262px"}}
            />
          </MDBView>

          <MDBCardBody>
            <h5 className='pink-text'>
              <MDBIcon fab icon='react' /> React, Handlebars
            </h5>

            <MDBCardTitle className='font-weight-bold'>
              Eat Da Burger
            </MDBCardTitle>

            <MDBCardText>
            Following MVC structure, built application using Node.js, Express-Handlebars, and MySQL. This fun app allows you to add burgers into your database and update them when consumed.
            </MDBCardText>

            <MDBBtn color='unique'>Visit Site</MDBBtn>
          </MDBCardBody>
        </MDBCard>
        </MDBCol>

        <MDBCol md='4'>
        <MDBCard narrow>
          <MDBView cascade>
            <MDBCardImage
              hover
              overlay='white-slight'
              className='card-img-top'
              src={Domains}
              alt='domains'
            />
          </MDBView>

          <MDBCardBody>
            <h5 className='pink-text'>
              <MDBIcon fab icon='js-square' /> WHOIS API, Javascript
            </h5>

            <MDBCardTitle className='font-weight-bold'>
              Domain Name Tracker
            </MDBCardTitle>

            <MDBCardText>
            Built this custom app for client Alice Computerworks. It uses WHOIS API to search for domain names' expiration date. Using Moment.js the app will tell you if the domain is set to expire within the month.
            </MDBCardText>

            <MDBBtn color='unique'>Visit Site</MDBBtn>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    
    </MDBRow>

    <MDBRow className="pt-5">
    <MDBCol md='4'>
        <MDBCard narrow>
          <MDBView cascade>
            <MDBCardImage
              hover
              overlay='white-slight'
              className='card-img-top'
              src={Workout}
              alt='Workout'
            />
          </MDBView>

          <MDBCardBody>
            <h5 className='pink-text'>
              <MDBIcon icon='database' /> Node.js, MongoDB
            </h5>

            <MDBCardTitle className='font-weight-bold'>
            Workout Tracker
            </MDBCardTitle>

            <MDBCardText>
            This application uses Node.js, Express/Handlebars, Mongo/Mongoose and follows MVC structure. It allows a user to both track and edit their workouts.
            </MDBCardText>

            <MDBBtn color='unique'>Visit Site</MDBBtn>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>

     

      <MDBCol md='4'>
        <MDBCard narrow>
          <MDBView cascade>
            <MDBCardImage
              hover
              overlay='white-slight'
              className='card-img-top'
              src={DayPlanner}
              alt='planner'
            />
          </MDBView>

          <MDBCardBody>
            <h5 className='pink-text'>
              <MDBIcon fab icon='chrome' /> Javascript, local storage
            </h5>

            <MDBCardTitle className='font-weight-bold'>
              Daily Scheduler 
            </MDBCardTitle>

            <MDBCardText>
            Using javascript to manipulate the DOM, this app allows you to save daily tasks to local storage and uses Moment.js to let you know what hours have passed and which still loom.
            </MDBCardText>

            <MDBBtn color='unique'>Visit Site</MDBBtn>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      <MDBCol md='4'>
        <MDBCard narrow>
          <MDBView cascade>
            <MDBCardImage
              hover
              overlay='white-slight'
              className='card-img-top'
              src={Weather}
              alt='weather'
            />
          </MDBView>

          <MDBCardBody>
            <h5 className='pink-text'>
              <MDBIcon fab icon='js-square' /> Ajax calls, Javascript
            </h5>

            <MDBCardTitle className='font-weight-bold'>
              Weather Forecast
            </MDBCardTitle>

            <MDBCardText>
            Using openweathermap API and axios, built a weather application using HTML, Javascript, and CSS. Local Storage allows user to save recent searches for quick access.
            </MDBCardText>

            <MDBBtn color='unique'>Visit Site</MDBBtn>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>

    </MDBRow>
    
    
    </MDBContainer>
  )
}

export default Portfolio;
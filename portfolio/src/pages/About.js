import React from "react";
import Row from "../components/Row";
import Container from "../components/Container";

function About() {
  return (
    <div>
      <Container>
        <Row title={"About Me"}>
          <div className="row">
            <div className="col-md-3">
              <img
                src="assets/images/portfolio1.jpg"
                className="img-fluid"
                alt="Responsive image"
              />
              <div className="col-md-9">
                <p>
                  Like many clueless college students, I majored in what I was
                  interested in - and then never got a career in it. I landed
                  myself in food service management and have managed a coffee
                  shop from 2012 to 2019. Don't get me wrong - it's fun! It
                  makes you endlessly problem solve, be efficient and creative
                  with your resources, and most of all, learn how to get along
                  with everyone. But after 8 years in this industry, I'd like to
                  move on.
                </p>
                <p>
                  I found my interest of software engineering suddenly. I
                  thought I'd never want to sit in front of a screen all day,
                  but people change. Now I'm learning to develop and loving how
                  challenging it is. It's frustrating and demanding and
                  incredibly rewarding when you get it right. You enjoy that
                  feeling for about 4 minutes and then move on to the next!
                  Please enjoy this site and see a little bit of what I've been
                  up to for the past 6 months. And then go ahead and reach out
                  with that job offer.
                </p>
              </div>
            </div>
          </div>
        </Row>
      </Container>
    </div>
  );
}

export default About;

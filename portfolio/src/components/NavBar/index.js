import React from "react";
import "./style.css";
import {MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavbarToggler, MDBCollapse, MDBNavItem, MDBNavLink, MDBIcon, MDBModal, MDBModalBody, MDBModalHeader} from 'mdbreact';
import Resume from "../../pages/assets/pdf/Resume_BeccaBurke2020.pdf"
class Navbar extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
          collapse: false,
          modal: false
      };
      this.onClick = this.onClick.bind(this);
  }
  toggle = () => {
        this.setState({
          modal: !this.state.modal
        })
      }

  onClick() {
    this.setState({
        collapse: !this.state.collapse,
      });
  }

  render() {
    return(
      <header>
            <MDBNavbar className="blue-gradient" dark expand="md" scrolling fixed="top">
              <MDBNavbarBrand href="/">
                  <strong>/</strong>
              </MDBNavbarBrand>
              <MDBNavbarToggler onClick={ this.onClick } />
              <MDBCollapse isOpen = { this.state.collapse } navbar>
                <MDBNavbarNav left>
                <MDBNavItem>
                      <MDBNavLink to="/about">About</MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                      <MDBNavLink to="/contact">Contact</MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink to="/portfolio">Portfolio</MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink onClick={this.toggle} to="#">Resume</MDBNavLink>
                  </MDBNavItem>
                </MDBNavbarNav>
                <MDBNavbarNav right>
                  <MDBNavItem>
                    <MDBNavLink to="https://github.com/reburke286" target="_blank"><MDBIcon fab icon="github" /></MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink to="https://www.linkedin.com/in/beccaburke/" target="_blank"><MDBIcon fab icon="linkedin" /></MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink to="https://twitter.com/beccadburke" target="_blank"><MDBIcon fab icon="twitter" /></MDBNavLink>
                  </MDBNavItem>
                </MDBNavbarNav>
              </MDBCollapse>
            </MDBNavbar>
          
          

   
        //  {/* MODAL */}
         <MDBModal size="fluid" isOpen={this.state.modal} toggle={this.toggle}    >
           <MDBModalHeader toggle={this.toggle}>Becca's Resume</MDBModalHeader>
           <MDBModalBody> 
           <iframe src={Resume} title="resume" />
           </MDBModalBody>
         </MDBModal>
         </header>
     
    );
  }
}

export default Navbar;


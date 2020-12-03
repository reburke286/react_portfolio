import React, {Component} from "react";
import {  MDBContainer, MDBRow, MDBCol, MDBIcon, MDBBtn, MDBInput, MDBModal, MDBModalBody, MDBModalHeader} from "mdbreact";
class Contact extends Component {

  //Modal Functions
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
//Form functions
  state = {
      name: "",
      email: "",
      message: ""
  };

  handleInputChange = event => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    event.preventDefault();
    if (!this.state.name || !this.state.email || !this.state.message) {
      alert("Fill out all fields please!");
    } 

    const msg = {
      name: this.state.name,
      email: this.state.email,
      message: this.state.message
    }
    console.log(msg)

    this.toggle();
    this.setState({
      name: "",
      email: "",
      message: ""
    });
  };

  render() {
    // Notice how each input has a `value`, `name`, and `onChange` prop
    return (
      <header>
      <MDBContainer>
        <h1 className="h1-responsive text-center my-5">
          Contact Me 
        </h1>
        <MDBRow>
          <MDBCol md="9" className="md-0 mb-5">
            <form>
              <MDBRow>
                <MDBCol md="6">
                  <div className="md-form mb-0">
                    <MDBInput 
                    type="text" 
                    id="contact-name" 
                    label="Your name"
                    value={this.state.name}
                    name="name"
                    onChange={this.handleInputChange} />
                  </div>
                </MDBCol>
                <MDBCol md="6">
                  <div className="md-form mb-0">
                    <MDBInput
                      type="text"
                      id="contact-email"
                      label="Your email"
                      value={this.state.email}
                      name="email"
                      onChange={this.handleInputChange}
                    />
                  </div>
                </MDBCol>
              </MDBRow>
              <MDBRow>
                <MDBCol md="12">
                  <div className="md-form mb-0">
                    <MDBInput
                      type="textarea"
                      id="contact-message"
                      label="Your message"
                      value={this.state.message}
                      name="message"
                      onChange={this.handleInputChange}
                    />
                  </div>
                </MDBCol>
              </MDBRow>
            </form>
            <div className="text-center text-md-left">
              <MDBBtn className="light-blue accent-4" size="md" onClick={this.handleFormSubmit}>
                Send
              </MDBBtn>
            </div>
          </MDBCol>
          <MDBCol md="3" className="text-center">
            <ul className="list-unstyled mb-0">
              <li>
                <MDBIcon icon="map-marker-alt" size="2x" className="blue-text" />
                <p>Los Angeles, CA 90041, USA</p>
              </li>
              <li>
                <MDBIcon icon="phone" size="2x" className="blue-text mt-4" />
                <p>1 (404) 987 8881</p>
              </li>
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>

   //  {/* MODAL */}
   <MDBModal size="fluid" isOpen={this.state.modal} toggle={this.toggle}    >
   <MDBModalHeader toggle={this.toggle}>Thank you!</MDBModalHeader>
   <MDBModalBody> 
     <p> Your message has been received and will be replied to in a timely manner.</p>
  
   </MDBModalBody>
 </MDBModal>
 </header>


  );

  }
}

export default Contact;

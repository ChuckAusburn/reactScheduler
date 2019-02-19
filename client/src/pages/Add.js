import React, {Component} from "react";
// import "./index.css";
import Saved from "../components/Saved";
import Row from "../components/Row";
import Container from "../components/Container";
import Calendar from "../components/Calendar"
import {List,ListItem} from "../components/List";
import DeleteBtn from "../components/DeleteBtn";
import API from "../utils/API"
//import {MDBContainer,MDBRow,MDBCol,MDBBtn,MDBIcon,MDBInput} from 'mdbreact';


class Add extends Component {
   state = {
     title: "",
     img: "",
     date: "",
     summary: "",
     saved: []
   };
 

 handleInputChange = event => {
   const {
     name,
     value
   } = event.target;
   this.setState({
     [name]: value
   });
 };
   

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.title && this.state.author) {
      API.saveBook({
          title: this.state.title,
          author: this.state.author,
          synopsis: this.state.synopsis
        })
        .then(res => this.loadBooks())
        .catch(err => console.log(err));
    }
  };

// const FormPage = () => {return ( <MDBContainer>
//     <MDBRow>
//     <MDBCol md = "6">
//     <
//     form >
//     <
//     p className = "h5 text-center mb-4" > Subscribe </p> <
//     div className = "grey-text" >
//     <
//     MDBInput label = "Your name"
//     icon = "user"
//     group type = "text"
//     validate error = "wrong"
//     success = "right" /
//     >
//     <
//     MDBInput label = "Your email"
//     icon = "envelope"
//     group type = "email"
//     validate error = "wrong"
//     success = "right" /
//     >
//     </div> <div className = "text-center" >
//     <MDBBtn outline color = "info" >
//     Send < MDBIcon far icon = paper - plane " className=" ml - 1 " /> 
//     </MDBBtn> 
//     </div> 
//     </form>
//     </MDBCol>
//     </MDBRow>
//     </MDBContainer>
//   );
// };

// export default FormPage;
  
 render() {
    return(
    <div>
      <Saved backgroundImage="https://media.giphy.com/media/aqCQhTE5dCHo4/200.gif">
        <h1>Add Events</h1>
        <h2>Welcome to Los Angeles</h2>
      </Saved>
      <Container style={{ marginTop: 30 }}>
        <Row>
          <h4></h4>
            <ul class="ch-grid">
              <li>
                <div className="ch-item ch-img-1">
                  <div className="ch-info">
                    <h3>Search</h3>
                    <p>Hundreds of exciting events near you</p>
                  </div>
                </div>
              </li>
              <li>
                <div class="ch-item ch-img-2">
                  <div class="ch-info">
                    <h3>Save</h3>
                    <p>Your favorites to visit in the future</p>
                  </div>
                </div>
              </li>
              <li>
                <div class="ch-item ch-img-3">
                  <div class="ch-info">
                    <h3>Send</h3>
                    <p>Us your thoughts on how we can improve</p>
                  </div>
                </div>
              </li>
              <li>
                <div class="ch-item ch-img-4">
                  <div class="ch-info">
                    <h3>Survive</h3>
                    <p>Because being a nerd is a full-time job</p>
                  </div>
                </div>
              </li>
              </ul>
        </Row>
        <Row style={{ marginTop: 30 }}>
          <h4>Upcoming Events</h4>
          <Calendar/>
        <br/>
      
        </Row>
      </Container>
    </div>
  );
}
}

export default Add;
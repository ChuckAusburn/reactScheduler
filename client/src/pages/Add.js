import React, {Component} from "react";
import "./add.css";
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
    <div id="wrapper2">
      <Row id="a-row">
        <div className="header">
          <h1>Add Event</h1>
        </div>
      </Row>
    </div>
  );
}
}

export default Add;
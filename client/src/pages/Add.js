import React, {Component} from "react";
import "./add.css";
import Row from "../components/Row";
import API from "../utils/API"
import Calendar from 'react-calendar'
import { Input, TextArea, FormBtn } from "../components/Form";


class Add extends Component {
   state = {
     title: "",
     img: "",
     date: new Date(),
     summary: "",
   };

   onChanges = date => this.setState({ date })  
 
  // Handles updating component state when the user types into the input field
  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };
   
  // When the form is submitted, use the API.saveEvent method to save the event data
  // Then reload books from the database
  handleFormSubmit = event => {
    event.preventDefault();
      API.saveEvent({
        title: this.state.title,
        img: this.state.img,
        summery: this.state.summery,
        date: this.state.date
      })
        .catch(err => console.log(err))
        .then(console.log(this.state.title, this.state.img, this.state.date, this.state.summery));
  };
 
 render() {
    return(
    <div id="wrapper2">
      <Row id="a-row">
        <div className="header">
          <h1>Add Event</h1>
        </div>
      <form>
        <Input
          value={this.state.title}
          onChange={this.handleInputChange}
          name="title"
          placeholder="Title (required)"
        />
        <Input
          value={this.state.img}
          onChange={this.handleInputChange}
          name="img"
          placeholder="Image url link"
        />
        <TextArea
          value={this.state.summery}
          onChange={this.handleInputChange}
          name="summery"
          placeholder="Summery (Optional)"
        />
        <Calendar
          onChanges={this.onChange}
          value={this.state.date}
        />

        <FormBtn
          onClick={this.handleFormSubmit}
        >
          Submit Book
        </FormBtn>
      </form>
      </Row>
    </div>
  );
}
}

export default Add;
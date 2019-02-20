import React, {Component} from "react";
import "./add.css";
import Row from "../components/Row";
import API from "../utils/API"
// import Calendar from 'react-calendar'
import { Input, TextArea, FormBtn } from "../components/Form";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";



class Add extends Component {
   state = {
     title: "",
     img: "",
     date: new Date(),
     summary: "",
   };

   handleChange(date) {
    this.setState({
      date: date
    });
  }
  


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
        summary: this.state.summary,
        date: this.state.date
      })
        .catch(err => console.log(err))
        .then(console.log(this.state.title, this.state.img, this.state.date, this.state.summary));
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
          placeholder="Image URL (link)"
        />
        <TextArea
          value={this.state.summary}
          onChange={this.handleInputChange}
          name="summary"
          id="textarea-add"
          placeholder="Summary (optional)"
        />
        <DatePicker
        selected={this.state.date}
        onSelect={this.handleSelect} //when day is clicked
        onChange={this.onChanges} //only when value has changed
        />
        {/* <Calendar
          onChanges={this.onChange}
          value={this.state.date}
        /> */}
        <FormBtn
          disabled={!( this.state.title)}
          onClick={this.handleFormSubmit}
        >
          Submit Event
        </FormBtn>
      </form>
      </Row>
    </div>
  );
}
}

export default Add;
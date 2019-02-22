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
     summery: "",
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
    this.state.date.setHours(0,0,0)
      API.saveEvent({
        title: this.state.title,
        img: this.state.img,
        summery: this.state.summery,
        date: String(this.state.date)
      })
        .catch(err => console.log(err))
        .then(console.log(this.state.title, this.state.img, this.state.date, this.state.summery));
  };
 
 render() {
    return(
    <div id="wrapper2">
      <Row id="h-row">
        <div className="header">
          <h1>Add Event</h1>
        </div>
      </Row>
      <Row id="a-row">
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
        <DatePicker
          id="date-picker"
          dateFormat="MMMM d, yyyy"
          selected={this.state.date}
          onSelect={this.handleSelect} //when day is clicked
          onChange={this.onChanges} //only when value has changed
        />
        <TextArea
          value={this.state.summery}
          onChange={this.handleInputChange}
          name="summery"
          id="textarea-add"
          placeholder="Summery (optional)"
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

import React, {Component} from "react";
import "./add.css";
import Saved from "../components/Saved";
import Row from "../components/Row";
import Container from "../components/Container";
import Calendar from "../components/Calendar"
import {List,ListItem} from "../components/List";
import DeleteBtn from "../components/DeleteBtn";
import API from "../utils/API"
  
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
    title,
    img,
    date,
    summary
  } = event.target;
    this.setState({title: event.target.value})
    this.setState({img: event.target.value})
    this.setState({date: event.target.value})
    this.setState({summary: event.target.value})
 }
};

handleFormSubmit = event => {
  event.preventDefault();
  if (this.state.title && this.state.author) {
    API.saveBook({
        title: this.state.title,
        img: this.state.img,
        date: this.state.date,
        summary: this.state.summary
      })
      .then(res => this.loadBooks())
      .catch(err => console.log(err));
  }
}

//render(){
//}
//}

export default Add;
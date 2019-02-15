import React, { Component } from "react";
import "./index.css";
import Saved from "../components/Saved";
import Row from "../components/Row";
import Container from "../components/Container";
import Calendar from "../components/Calendar"
import { List, ListItem } from "../components/List";
import API from "../utils/API"

class About extends Component {

  state = {
    events: [],
  };

  onChange = date => this.setState({ date })  


  componentDidMount() {
    this.loadEvents();
  }

  loadEvents = () => {
    API.getEvents()
      .then(res => this.setState({ events: res.data }))
      .then(console.log(this.state.event))
      .catch(err => console.log(err));
  };
  render() {
    return(
    <div>
      <Saved backgroundImage="https://media.giphy.com/media/aqCQhTE5dCHo4/200.gif">
        <h1>Nerd Universe</h1>
        <h2>Welcome to Los Angeles</h2>
      </Saved>
      <Container style={{ marginTop: 30 }}>
        <Row>
          <h4>The Basics</h4>
            <ul className="ch-grid">
              <li>
                <div className="ch-item ch-img-1">
                  <div className="ch-info">
                    <h3>Search</h3>
                    <p>Hundreds of exciting events near you</p>
                  </div>
                </div>
              </li>
              <li>
                <div className="ch-item ch-img-2">
                  <div className="ch-info">
                    <h3>Save</h3>
                    <p>Your favorites to visit in the future</p>
                  </div>
                </div>
              </li>
              <li>
                <div className="ch-item ch-img-3">
                  <div className="ch-info">
                    <h3>Send</h3>
                    <p>Us your thoughts on how we can improve</p>
                  </div>
                </div>
              </li>
              <li>
                <div className="ch-item ch-img-4">
                  <div className="ch-info">
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
          {this.state.events.length ? (
          <List>
            {this.state.events.map(event => (
              <ListItem key={event._id}>
              <img src={event.img} alt="Event"/>
              <a href={"/events/" + event._id}>
                <strong>
                  {event.title}
                </strong>
              </a>
                <p>{event.summery}</p>
                <p>{event.date}</p>
                <button className="btn btn-primary" id="save">Save Event</button>
            </ListItem>
            ))}
          </List>
        ) : (
          <h3>No Results to Display</h3>
        )}
        </Row>
      </Container>
    </div>
  );
}
}

export default About;

import React, { Component } from "react";
import "./about.css";
import Saved from "../components/Saved";
import Row from "../components/Row";
import Container from "../components/Container";
import Calendar from 'react-calendar'
import { List, ListItem } from "../components/List";
import API from "../utils/API"

class About extends Component {

  state = {
    events: [],
    date: new Date(),
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
      <Saved backgroundImage="https://images.pexels.com/photos/1481276/pexels-photo-1481276.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940">
        <h1>Nerd Universe</h1>
        <h5>Welcome to hub, where nerds come together to party in Los Angeles.
          In the past, the term "nerd" was frowned upon and dismissed
          by the general public. Now, we've become the majority and are 
          ready to be loud and proud of our inner geek. Join the party 
          and come find like-minded individuals like you.
        </h5>
        <button className="btn btn-primary" id="learn">Learn More</button>
      </Saved>
      <Container style={{ marginTop: 30 }}>
        <Row>
          <h4>The Four Principles</h4>
          <br></br>
            <ul className="ch-grid">
              <li>
                <div className="ch-item ch-img-1">
                  <div className="ch-info-wrap">
                    <div className="ch-info">
                      <div className="ch-info-front ch-img-1"></div>
			            	    <div className="ch-info-back">
                          <h3>Search</h3>
                          <p>Hundreds of exciting events near you!</p>
                        </div>
                      </div>
                    </div>
                  </div>
              </li>
              <li>
                <div className="ch-item ch-img-2">
                <div className="ch-info-wrap">
                  <div className="ch-info">
                    <div className="ch-info-front ch-img-2"></div>
			                <div className="ch-info-back">
                        <h3>Save</h3>
                        <p>Your favorites to check out later!</p>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div className="ch-item ch-img-3">
                  <div className="ch-info-wrap">
                      <div className="ch-info">
                        <div className="ch-info-front ch-img-3"></div>
			              	    <div className="ch-info-back">
                            <h3>Submit</h3>
                            <p>Events of your own, to spread the news!</p>
                          </div>
                      </div>
                    </div>
                  </div>
              </li>
              <li>
              <div className="ch-item ch-img-4">
                <div className="ch-info-wrap">
                  <div className="ch-info">
                    <div className="ch-info-front ch-img-4"></div>
			                <div className="ch-info-back">
                        <h3>Send</h3>
                        <p>Us your thoughts on how we can improve!</p>
                      </div>
                    </div>
                  </div>
                </div>
                </li>
              </ul>
        </Row>
        <Row>
          <h4>Upcoming Events</h4>
          <div className="article text-center" id="calendar">
            <Calendar
              onChange={this.onChange}
              value={this.state.date}
              onClick={console.log(this.state.date)}
            />
          </div>        
      </Row>
      </Container>
      <Row>
          {this.state.events.length ? (
          <List>
            <h4>New Events</h4>
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
    </div>
  );
}
}

export default About;

import React, { Component } from "react";
import { Link } from "react-router-dom";
import Col from "../components/Col"
import Row from "../components/Row"
import Container from "../components/Container"
import "./detail.css";
import API from "../utils/API";

class Detail extends Component {
  state = {
    event: {}
  };
  // When this component mounts, grab the book with the _id of this.props.match.params.id
  // e.g. localhost:3000/events/599dcb67f0f16317844583fc
  componentDidMount() {
    API.getEvent(this.props.match.params.id)
      .then(res => this.setState({ event: res.data }))
      .catch(err => console.log(err));
  }

  render() {
    return (  
    <div>  
      <div id="wrapper2">
        <Container fluid>
          <Row id="d-row">
            <div className="header">
              <h1>{this.state.event.title}</h1>
            </div>
          </Row>
          <Row id="d-row">
            <Col size="md-3">
              <img src={this.state.event.img} alt="saved-event" id="saved-event"></img>
              <p>{this.state.event.date}</p>
              <p>{this.state.event.time}</p>
              <Link to="/" ><button className="btn btn-primary" id="home">← Back To Home</button></Link>
            </Col>
            <Col size="md-8">
              <p>{this.state.event.summery}</p>
            </Col>
          </Row>
          {/* <Row id="d-row">
            <Col size="sm-12">
              <Link to="/" id="home">← Back To Home</Link>
            </Col>
          </Row> */}
        </Container>
      </div>
    </div>
    );
  }
}

export default Detail;

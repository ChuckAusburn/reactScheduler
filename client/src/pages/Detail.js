import React, { Component } from "react";
import { Link } from "react-router-dom";
import Col from "../components/Col"
import Row from "../components/Row"
import Container from "../components/Container"
// import Jumbotron from "../components/Jumbotron";
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
      <Container fluid>
      <br></br>
        <Row>
          <Col size="md-2">
            <img src={this.state.event.img} alt="Event"></img>
          </Col>
          <Col size="md-10">
              <h1>
                {this.state.event.title}
              </h1>
          </Col>
        </Row>


        <Row>
          <Col size="md-10 md-offset-1">
              <h1>Synopsis</h1>
              <p>
                {this.state.event.summery}
              </p>
              <p>{this.state.event.date}</p>
          </Col>
        </Row>
        <Row>
          <Col size="md-2">
            <Link to="/">← Back to home</Link>
          </Col>
        </Row>
        <br></br>
      </Container>
    );
  }
}

export default Detail;

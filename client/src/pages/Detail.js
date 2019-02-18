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
        <Row>
          <Col size="md-12">
            
              <h1>
                {this.state.event.title}
              </h1>
          </Col>
        </Row>
        <Row>
          <Col size="md-10 md-offset-1">
            <article>
              <h1>Synopsis</h1>
              <p>
                {this.state.event.summery}
              </p>
            </article>
          </Col>
        </Row>
        <Row>
          <Col size="md-2">
            <Link to="/">← Back to home</Link>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Detail;

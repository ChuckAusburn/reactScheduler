import React from "react";
import "./index.css";
import Saved from "../components/Calendar";
import Row from "../components/Row";
import Container from "../components/Container";

function About() {
  return (
    <div>
      <Saved backgroundImage="https://media.giphy.com/media/aqCQhTE5dCHo4/200.gif">
        <h1>Nerd Universe</h1>
        <h2>Welcome to Los Angeles</h2>
      </Saved>
      <Container style={{ marginTop: 30 }}>
        <Row>
          <h4>The Basics</h4>
            <ul class="ch-grid">
              <li>
                <div class="ch-item ch-img-1">
                  <div class="ch-info">
                    <h3>Search</h3>
                    <p>Hundreds of exciting events near you</p>
                  </div>
                </div>
              </li>
              <li>
                <div class="ch-item ch-img-2">
                  <div class="ch-info">
                    <h3>Save</h3>
                    <p>Your favorites to visit in the future</p>
                  </div>
                </div>
              </li>
              <li>
                <div class="ch-item ch-img-3">
                  <div class="ch-info">
                    <h3>Send</h3>
                    <p>Us your thoughts on how we can improve</p>
                  </div>
                </div>
              </li>
              <li>
                <div class="ch-item ch-img-4">
                  <div class="ch-info">
                    <h3>Survive</h3>
                    <p>Because being a nerd is a full-time job</p>
                  </div>
                </div>
              </li>
              </ul>
        </Row>
        <Row style={{ marginTop: 30 }}></Row>
      </Container>
    </div>
  );
}

export default About;

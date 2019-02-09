import React from "react";
import Saved from "../components/Article";
import Container from "../components/Container";

function About() {
  return (
    <div>
      <Saved backgroundImage="https://images.pexels.com/photos/586339/pexels-photo-586339.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940">
        <h1>The New York Times Newspaper</h1>
        <h2>React Article Search</h2>
      </Saved>
      <Container style={{ marginTop: 30 }}></Container>
    </div>
  );
}

export default About;

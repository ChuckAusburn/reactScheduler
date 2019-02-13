import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { library } from '@fortawesome/fontawesome-svg-core';
import { faGamepad } from '@fortawesome/free-solid-svg-icons';
import Saved from "./pages/Saved";
import About from "./pages/About";
import Search from "./pages/Search";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";
import WebFont from 'webfontloader';

// Google Fonts
  WebFont.load({
    google: {
      families: ['VT323', 'VT323']
     }});

  WebFont.load({
   google: {
     families: ['Roboto Mono', 'Roboto Mono']
    }});

// FontAwesome Icons
library.add(faGamepad)

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Wrapper>
          <Route exact path="/" component={About} />
          <Route exact path="/about" component={About} />
          <Route exact path="/saved" component={Saved} />
          <Route exact path="/search" component={Search} />
        </Wrapper>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

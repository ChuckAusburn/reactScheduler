import React, { Component } from "react";
import API from "../utils/API";
import "./saved.css";
import Wrapper2 from "../components/Wrapper2";

class Saved extends Component {
  state = {
    topic: "",
    startYear: "",
    endYear: "",
    articles: [],
    saved: []
};

// When delete article button is clicked, remove article from db
handleDeleteButton = (id) => {
  API.deleteArticle(id)
    .then(this.getSavedArticles());
}

render() {
  return (
    <div id="wrapper2">
      <h1>Saved Events</h1>
      <li className="list-group-item">
        <h4>
          <span>
            <em>{this.title}</em>
          </span>
          <span className="btn-group pull-right">
            <a href={this.url} target="_blank">
              <button className="btn btn-primary">View Event</button>
            </a>
            <a href={this.url} target="_blank">
            <button className="btn btn-danger" onClick={() => this.handleDeleteButton(this._id)}>Delete</button>
            </a>
          </span>
        </h4>
          <p>Date Published: {this.date}</p>
       </li>
    </div>
    );
  }
}

export default Saved;

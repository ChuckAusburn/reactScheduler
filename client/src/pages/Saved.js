import React, { Component } from "react";
import API from "../utils/API";

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
    <div className="container" style={{ marginTop: 30 }}>
      <li className="list-group-item">
        <h4>
          <span>
            <em>{this.title}</em>
          </span>
          <span className="btn-group pull-right">
            <a href={this.url} target="_blank">
              <button className="btn btn-default ">View Article</button>
            </a>
            <button className="btn btn-primary" onClick={() => this.handleDeleteButton(this._id)}>Delete</button>
          </span>
        </h4>
          <p>Date Published: {this.date}</p>
       </li>
    </div>
    );
  }
}

export default Saved;

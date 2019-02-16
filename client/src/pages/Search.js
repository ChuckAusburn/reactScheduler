import React, { Component } from "react";
import API from "../utils/API";
import Container from "../components/Container";
import SearchForm from "../components/SearchForm";
import { List, ListItem } from "../components/List";
import Alert from "../components/Alert";

class Search extends Component {
  state = {
    search: "",
    startYear: "",
    endYear: "",
    articles: [],
    saved: []
  };

// When the component mounts, get a list of all saved articles and update this.state.saved
//   componentDidMount() {
//     this.searchArticle ("Space");
//   }

//   searchArticle  = query => {
//     API.searchArticle(query)
//       .then(res => this.setState({ articles: res.data.response.docs}))
//       .then(console.log(this.state.articles))  // .catch(err => console.log(err));
//   };

  handleInputChange = event => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value
    });
  };

  // When the form is submitted, search the Giphy API for `this.state.search`
  handleFormSubmit = event => {
    event.preventDefault();
    this.searchArticle (this.state.search);
  };

render() {
    return (
      <div>
        <Container style={{ minHeight: "80%" }}>
          <h1 className="text-center">Search</h1>
          <Alert
            type="danger"
            style={{ opacity: this.state.error ? 1 : 0, marginBottom: 10 }}
          >
            {this.state.error}
          </Alert>
          <SearchForm
            handleFormSubmit={this.handleFormSubmit}
            handleInputChange={this.handleInputChange}
            article={this.state.article}
          />
          <List>
          {this.state.articles.map(articles => {
            return (
              <ListItem key={articles.id}>
                <h1>{articles.headline.print_headline}</h1>
                <p>{articles.lead_paragraph}</p>
                <p>Publication Date: {articles.pub_date}</p>
                <a href={articles.web_url}>Link</a>  
              </ListItem>
            );
          })}
        </List>
        </Container>
      </div>
    );
  }
}

export default Search;
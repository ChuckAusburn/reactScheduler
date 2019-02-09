import React from "react";
import "./style.css";

// Using the datalist element we can create autofill suggestions based on the props.breeds array
function SearchForm(props) {
  return (
    <form className="search">
      <div className="form-group">
        <label htmlFor="article">Search Article:</label>
        <input
          value={props.search}
          onChange={props.handleInputChange}
          name="search"
          list="search"
          type="text"
          className="form-control"
          placeholder="Topic"
          id="search"
        />
        {/* <input
          value={props.search}
          onChange={props.handleInputChange}
          name="startYear"
          list="startYear"
          type="text"
          className="form-control"
          placeholder="Start Year"
          id="startYear"
        />
        <input
          value={props.search}
          onChange={props.handleInputChange}
          name="endYear"
          list="endYear"
          type="text"
          className="form-control"
          placeholder="End Year"
          id="endYear"
        /> */}
        {/* <datalist id="articles">
          {props.article.map(article => (
            <option value={article} key={article} />
          ))}
        </datalist> */}
        <button type="submit" onClick={props.handleFormSubmit} className="btn btn-success">
          Search
        </button>
      </div>
    </form>
  );
}

export default SearchForm;
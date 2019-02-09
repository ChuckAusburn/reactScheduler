import React from "react";
import "./style.css";

function Article(props) {
  return (
    <div className="article text-center" style={{ backgroundImage: `url(${props.backgroundImage})` }}>
      {props.children}
    </div>
  );
}

export default Article;

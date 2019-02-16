import React from "react";
import "./style.css";

function Calendar(props) {
  return (
    <div className="article" style={{ backgroundImage: `url(${props.backgroundImage})` }}>
      {props.children}
    </div>
  );
}

export default Calendar;

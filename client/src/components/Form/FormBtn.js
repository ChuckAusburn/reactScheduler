import React from "react";

export function FormBtn(props) {
  return (
    <button {...props} style={{ float: "right"}} className="btn btn-primary" id="btn-add-event">
      {props.children}
    </button>
  );
}

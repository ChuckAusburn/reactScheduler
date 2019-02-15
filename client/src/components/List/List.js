import React from "react";
import "./style.css";

export function List({ children }) {
  return (
    <div className="">
      <ul className="list-group">{children}</ul>
    </div>
  );
}
import React from "react";
import "./style.css";

function Row(props) {
  return (
    <div class="row">
      <div class="col-md">
        <h2>{props.title}</h2>
        <hr id="bodyline" />{" "}
      </div>
    </div>
  );
}

export default Row;

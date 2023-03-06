import React from "react";
import "./index.css";

function Random({min, max}) {
  return (
    <div className="Random">
    {<h1>Random value between {min} and {max} : { Math.floor((Math.random() * (max)) + min)}</h1>}
    </div>
  )
}

export default Random
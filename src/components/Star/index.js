import React, { Component } from "react";
import "./style.css";

export default class Star extends Component {

    rating = (className,value) => {
       return className > value;
    }

  render() {
      const {className,value} = this.props;
    return (
     <div className="shield__container">
        <div className={`container__star ${this.rating(className,value) ? "red" : ""}`} ></div>
      </div>
    );
  }
}

//container__star 
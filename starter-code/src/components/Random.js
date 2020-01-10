import React from "react";
import "./Random.css";

class Random extends React.Component{
  render(){
    const min = this.props.min;
    const max = this.props.max;

    function getRandomArbitrary(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min)) + min; 
    }

    const number = getRandomArbitrary(min, max);

    return(
      <div className="Random">
        <h4>Random value between {this.props.min} and {this.props.max} => {number}</h4>
      </div>
    );
  }
}

export default Random;
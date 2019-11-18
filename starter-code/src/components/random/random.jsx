import "./random.css"
import React from "react";
// ^ this is always needed for any react components

class Random extends React.Component {

  randomValue = (min, max) => {
    return(Math.floor(Math.random()*max)+min);
  }

  render() {
    return(
      <div>Random vlaue between {this.props.min} and {this.props.max} => {this.randomValue(this.props.min, this.props.max)}</div>
    );
  }
}

export default Random
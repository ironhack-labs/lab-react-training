import React from "react";

export default class Random extends React.Component {
  randNum = (min, max) => {
    return Math.floor(Math.random() * max + min);
  };
  render() {
    return (
      <div className="idBox2">
        <h2>
          Random value between {this.props.min} and {this.props.max}:{" "}
          {this.randNum(this.props.min, this.props.max)}
        </h2>
      </div>
    );
  }
}

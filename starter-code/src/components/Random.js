import React, { Component } from "react";

class Random extends Component {
  render() {
    return (
      <div id="simple-card">
        <p>
          Random value between {this.props.min} & {this.props.max} =>
          {(() => {
            return (
              Math.floor(Math.random() * (this.props.max - this.props.min)) +
              this.props.min
            );
          })()}
        </p>
      </div>
    );
  }
}

export default Random;

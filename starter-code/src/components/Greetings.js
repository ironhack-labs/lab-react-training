import React, { Component } from "react";

class Greetings extends Component {
  constructor(props) {
    super(props);

    this.children = String;
    this.lang = String;
  }

  render() {
    return (
      <div className="Flex">
        <p>Hallo {this.props.children}</p>
      </div>
    );
  }
}

export default Greetings;

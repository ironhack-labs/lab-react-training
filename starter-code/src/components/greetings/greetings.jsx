import "./greetings.css"
import React from "react";
// ^ this is always needed for any react components

class Greetings extends React.Component {
  

  render() {
    return(
      <div lang={this.props.lang}>{this.props.children}</div>
    );
  }
}

export default Greetings
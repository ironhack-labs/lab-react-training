import React, { Component } from "react";

class LikeButton extends Component {
  state = {
    count: 0
  };
  clickHander = () => {
    this.setState({
      count: this.state.count + 1
    });
  };
  render() {
    return (
      <div>
        <button>{this.state.count}</button>
      </div>
    );
  }
}

export default LikeButton;

// if you want to export something else in this file
// class Test {

// }
// export {Test, Test}

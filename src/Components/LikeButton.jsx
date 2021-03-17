import React, { Component } from "react";

class LikeButton extends Component {
    state = {
        counter: 0,
    }

    handleIncrement = () => {
        this.setState({ counter: this.state.counter + 1 })
    }
      render() {
        return (
          <div>
            <button onClick={this.handleIncrement}>{this.state.counter} Likes</button>
          </div>
        )
      }
}

export default LikeButton;

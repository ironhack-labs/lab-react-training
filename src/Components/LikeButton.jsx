import React, { Component } from "react";

//Iteration 8
class LikeButton extends Component {
    state = {
      counter: 0
    }
  
    handleIncrement = () => {
      this.setState({counter: this.state.counter + 1})
    }
  
    render() {

        return (
          <button onClick={this.handleIncrement}>{this.state.counter} Likes</button>
        )
      }
  }

  export default LikeButton;

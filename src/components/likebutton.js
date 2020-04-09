import React, { Component } from "react";

class LikeButton extends Component {

  state = {
    counter: 0,
  };
  
  handleClickIncrement = () => {
    this.setState({
      counter: this.state.counter + 1,
    });
  };

  render () { 
    return (
      <div className="likebutton-box">
        <button className="likebutton-btn" onClick={this.handleClickIncrement}>{this.state.counter} Likes</button>
      </div>
    )
  }
}

export default LikeButton;
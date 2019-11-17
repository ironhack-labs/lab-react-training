import React, { Component } from "react";

export default class LikeButton extends Component {
  state = {
    likes: 0,
    colors: ["purple", "blue", "green", "yellow", "orange", "red"],
    bgColor: ""
  };

  increaseLikes = () => {
    let clicks = (this.state.likes += 1);
    let randomIndex = Math.floor(Math.random()*6);
    let setBgColor = this.state.colors[randomIndex];
    this.setState({ likes: clicks, bgColor: setBgColor });
  };


  render() {
      if(this.state.bgColor===''){
          let firstBg = this.state.colors[Math.floor(Math.random()*6)]
            this.setState({bgColor: firstBg})
      }
    return (
      <div>
        <button
          onClick={this.increaseLikes}
          style={{ backgroundColor: this.state.bgColor, color: 'white' }}
        >
          <span>{this.state.likes}</span> Likes
        </button>
      </div>
    );
  }
}

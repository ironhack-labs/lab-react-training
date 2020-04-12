import React, { Component } from 'react';

let color = ['purple', 'blue', 'green', 'yellow', 'orange', 'red'];

class LikeButton extends Component {
  state = {
    like: 0,
  };

  increaseLike = (e) => {
    this.setState({
      like: this.state.like +1,
    });
    console.log("click", e)

  }

  setColor = () => {
    let num = this.state.like % color.length
    return num; 
  }
  render(){
    return(<button style={{'backgroundColor': color[this.setColor()], 'color': '#fff'}} onClick={this.increaseLike}>{this.state.like} Like</button>)
  }
}

export default LikeButton;
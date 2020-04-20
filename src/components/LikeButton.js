import React, { Component } from 'react';


class LikeButton extends Component {

  state ={
    count: 0,
    idColor: 0,
  }

  colors = ['purple','blue','green','yellow','orange','red'];

  counter = () => {
    this.setState({
      count: this.state.count +1,
      idColor: Math.floor(Math.random() * 5) + 1
    })
  }

  render() {
    const { count } = this.state;
    return(
      <button  className="like-button" style={{backgroundColor : this.colors[this.state.idColor]}} onClick={ this.counter }>{ count } likes</button>
    )
  }
}

export default LikeButton;
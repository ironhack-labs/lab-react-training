import React, { Component } from 'react';

class LikeButton extends Component {
  constructor(){
    super();
    this.colors = ['purple','blue','green','yellow','orange','red'];
    this.state = {
      count: 0,
      index: 0,
      color: this.colors[0]
    };
    this.addLike = this.addLike.bind(this);
  }

  addLike(){
    let maxIndex = 0;

    this.setState(previousState => {
      (previousState.index === 5) ? maxIndex = 0 : maxIndex = ++previousState.index;
      return {
        count: ++previousState.count,
        index: maxIndex,
        color: this.colors[maxIndex]
      }
    })
  }

  render() {
    const style = {
      backgroundColor: `${this.state.color}`
    }
    return (
      <div className='likeButton'>
        <button onClick={this.addLike} style={style}>{this.state.count} Likes</button>
      </div>
    );
  }
}

export default LikeButton;
import React, { Component } from 'react';

 class LikeButton extends Component {
    state = {
      increment : 0,
      color:""
    }

  increment = () => {
      const colors = ['purple', 'blue', 'green', 'yellow', 'orange', 'red']
      const number = Math.floor(Math.random() * 7)
      const res = colors[number]
    this.setState({
        increment:this.state.increment + 1,
        color: res
        }
    )
  }

  render() {
    return (
      <div className="LikeButton">
          <button onClick={this.increment} style={{backgroundColor:`${this.state.color}`, padding:'15px'}}>{this.state.increment} Likes </button>
      </div>
    );
  }
}

export default LikeButton;

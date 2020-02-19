import React, { Component } from 'react'


class LikeButton extends Component {
  state = {
      color: '#fff',
      cont: 0,
    }
  generateColor = () => {
    let color = '#' + Math.floor(Math.random() * 16777215).toString(16);
    let cont = this.state.cont + 1
    this.setState({
      color,
      cont,
    })
  }

  render() {
    return (
      <button className='like-btn' onClick={this.generateColor} style={{ backgroundColor: this.state.color }}>
        {this.state.cont} Likes
      </button>
    )
  }
}

export default LikeButton
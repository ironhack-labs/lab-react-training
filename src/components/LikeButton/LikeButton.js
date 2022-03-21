import React, { Component } from 'react'

class LikeButton extends Component {

  state = {
    likes: 0,
    colors: ['purple','blue','green','yellow','orange','red'],
    backgroundColor: 'purple'
  }

  addLike = () => {
    this.setState({
      likes: this.state.likes + 1,
      backgroundColor: this.state.colors[
        Math.floor(Math.random() * (this.state.colors.length - 0))
      ]
    })
  }

  render() {    
    return (
      <button 
        className='btn btn-primary m-2' 
        onClick={ () => this.addLike() }
        style={{ backgroundColor: this.state.backgroundColor }}>
          <span>{this.state.likes}</span> Likes
      </button>
    )
  }
}

export default LikeButton
import React, { Component } from 'react'

const colors = ['purple','blue','green','yellow','orange','red']

export default class LikeButton extends Component {

  constructor(){
    super()
    this.state = {
      numLikes: 0
    }
  }

  handleLike = () => {
    this.setState({
      numLikes: this.state.numLikes + 1
    })
  }

  pickColor = () => {
    return colors[Math.floor(Math.random() * ((colors.length-1) - 0 + 1) + 0)]
  }

  render() {
    return (
      <button style={{backgroundColor: this.pickColor(), border: 'none', margin: '20px'}} onClick={this.handleLike}>{this.state.numLikes} Likes</button>
    )
  }

}

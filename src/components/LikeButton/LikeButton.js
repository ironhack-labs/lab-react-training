import React, { Component } from 'react'

export default class LikeButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      color: 'green'
    }
    this.bgColor =
      ['purple', 'blue', 'green', 'yellow', 'orange', 'red', 'gold', 'brown']
  }

  handleIncrement = () => {
    // Generate a random number between (0 -> bgColor.length)
    let randomColor = Math.floor(Math.random() * (this.bgColor.length + 1))

    this.setState({
      count: this.state.count + 1,
      color: this.bgColor[randomColor]
    })
  }
  randomColor = () => {
    return 
  }

  render() {
    return (
      <div className='mx-4'>
        <button
          onClick={this.handleIncrement}
          className='btn'
          style={{ backgroundColor: `${this.state.color}`}}>
          {this.state.count} likes
        </button>
      </div>
    )
  }
}
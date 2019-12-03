import React, { Component } from 'react'

export class Random extends Component {
  render() {
    const min=this.props.min;
    const max=this.props.max;
    const randomNumber=Math.floor(Math.random() * max) + min;
    return (
      <div class='card'>
        Random value between {min} and {max} => {randomNumber}
      </div>
    )
  }
}

export default Random

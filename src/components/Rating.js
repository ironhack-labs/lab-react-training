import React, { Component } from 'react'

export default class Rating extends Component {
  render() {
    const  numFilledStars = Math.round(this.props.children)
    const re = new RegExp(`^.{${numFilledStars}}`,"g")
    return <p style={{fontSize: this.props.size}} >{'☆☆☆☆☆'.replace(re, '★'.repeat(numFilledStars))}</p>
  }
}

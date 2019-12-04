import React, { Component } from 'react'
import "./boxcolor.css"

 class BoxColor extends Component {
  render() {
    const {r, g, b} = this.props
    return (
      <div style={{ background: `rgb(${r},${g}, ${b})`}}>
        <h1>hello</h1>
      </div>
    )
  }
}

export default BoxColor


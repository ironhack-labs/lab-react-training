import React, { Component } from 'react';

class BoxColor extends Component {
  generateColor = (r, g, b) => {
    let divStyle = {
      backgroundColor: `rgb(${r}, ${g}, ${b})`,
      height: '10px',
    }
    return <div className='box' style={divStyle}></div>
  }
  render() {
    let { r, g, b } = this.props
    return (
      <div>
        {this.generateColor(r, g, b)}
      </div>
    )
  }
}

export default BoxColor;
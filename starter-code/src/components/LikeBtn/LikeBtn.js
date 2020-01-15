import React, { Component } from 'react'
import './style.css'

class LikeBtn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: '#fff',
      cont: 0,
    }
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
      <div className='like-btn' onClick={this.generateColor} style={{ backgroundColor: this.state.color }}>
        {this.state.cont} like
      </div>
    )
  }
}

export default LikeBtn
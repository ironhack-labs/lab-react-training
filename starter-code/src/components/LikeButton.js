import React, {Component} from 'react';

export default class LikeButton extends Component {
  state = {
    clickCount: 0,
    backgroundColor: "purple"
  }

  clickHandler = () => {
    const colorList = ['#1e1c9c', '#08cc3c', '#e2e615', '#58edb1', '#c454b0', '#bf2446']
    const newCount = this.state.clickCount + 1
    const newColor = colorList[Math.floor(Math.random() * colorList.length)]

    this.setState({
      clickCount: newCount,
      backgroundColor: newColor
    })
  }
  render() {
    return (
      <button onClick={this.clickHandler} style={{ backgroundColor: this.state.backgroundColor }} className="LikeButton">{this.state.clickCount} Likes</button>
    )
  }
}

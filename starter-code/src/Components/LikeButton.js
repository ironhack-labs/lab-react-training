import React from 'react';

class LikeButton extends React.Component {
  state = {
    clickCount: 0,
    backgroundColor: "purple"
  }

  clickHandler = () => {
    const colorList = ['purple', 'blue', 'green', 'yellow', 'orange', 'red']
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

export default LikeButton;
import React, { Component } from 'react';
import './index.css'

class LikeButton extends Component {
  state = {
    currentColor: 'white',
    currentLikes: 0
  }
  render() {
    const colorArray = ['purple','blue','green','yellow','orange','red']
    const randomColorGenerator = () => {
      this.setState({currentColor: colorArray[Math.floor(Math.random() * colorArray.length)]})
    }

    const handleClick = () => {
      randomColorGenerator()
      this.setState(prevstate => ({currentLikes: prevstate.currentLikes + 1}))
    }

    return (
      <div className='LikeButton'>
        <button onClick = {handleClick} style = {{backgroundColor: this.state.currentColor}}>{this.state.currentLikes} likes</button>
      </div>
    );
  }
}

export default LikeButton;
import React, { Component } from 'react'

export default class LikeButton extends Component {
    state = {
        count : 0,
        backGroundColor: "white"
    }

    countLikes = () => {
        const allColors = ['purple', 'blue', 'green', 'yellow', 'orange', 'red']
        this.setState({
            count: this.state.count + 1,
            backGroundColor: allColors[Math.floor(Math.random()*allColors.length)]
        })
    }

  render() {
    return (
      <div>
          <button onClick={this.countLikes} style={{backgroundColor: this.state.backGroundColor}}>
              {this.state.count} Likes
              </button>
          </div>
    )
  }
}

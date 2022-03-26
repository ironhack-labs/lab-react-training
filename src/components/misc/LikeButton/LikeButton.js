import React, { Component } from 'react'

export default class LikeButton extends Component {
    state = {
        count : 0,
        backGroundColor: 'purple'
    }

    countLikes = () => {
        const colors = ['purple', 'blue', 'green', 'yellow', 'orange', 'red']
        
        this.setState({
            count: this.state.count + 1,
            backGroundColor: colors[Math.floor(Math.random()*colors.length)]
        })
    }
  render() {

    const {count, backGroundColor} = this.state

    return (
        <div>
            <button onClick={this.countLikes} style={{backgroundColor: backGroundColor}}>
                {count} Likes
            </button>
        </div>
    )
  }
}
import React, { Component } from 'react'

export default class LikeButton extends Component {

    state = {
        clickCount: 0,
        liked: false,
        color: 'blue',
        colorArr: ['purple','blue','green','yellow','orange','red']
        
      }

    likeHandler = () => {
        this.setState((state, props) => ({
          clickCount: this.state.clickCount + 1,
          color: this.state.colorArr[Math.floor(Math.random()*this.state.colorArr.length)]

        }))
      }

    render() {
        return (
            <div>
            <button style={{backgroundColor: this.state.color}}onClick={this.likeHandler}>{this.state.clickCount} like{this.state.clickCount > 0 ? <span>s</span> : ''}</button>

            </div>
        )
    }
}

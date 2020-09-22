import React, { Component } from 'react'

export default class LikeButton extends Component {
    state = {
        clickCount: 0,
        color: ['purple','blue','green','yellow','orange','red']
      }

    handleClick = () => {
        this.setState((state) => ({ clickCount: state.clickCount + 1 }))
    }


    render() {

        return (
            <div>
                <button onClick={this.handleClick} style={{backgroundColor: this.state.color[this.state.clickCount]}} >{this.state.clickCount} Likes</button>
            </div>
        )
    }
}

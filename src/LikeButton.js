import React, { Component } from 'react'

export default class LikeButton extends Component {

state = {
    counter: 0,
}

likeHandler = () => {
    this.setState((state) => ({
        counter: state.counter + 1
    }))
  }

    render() {
        return (
            <>
          <button onClick={this.likeHandler}> {this.state.counter} Likes</button>      
            </>
        )
    }
}

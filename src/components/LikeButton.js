import React, { Component } from 'react'

export default class LikeButton extends Component {
    state = {
        likes: 0,
    }

    likeButton = () => {
        this.setState((state) => ({
            likes: state.likes + 1
        }))
    }

    render() {
        return (
            <div>
                <button onClick={this.likeButton}>{this.state.likes} Like(s)</button>
            </div>
        )
    }
}

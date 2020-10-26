import React, { Component } from 'react'

export default class LikeButton extends Component {
   
    state = {
        likes: 0
    };

    addLike = () => {
        let newCount = this.state.likes + 1;
        this.setState({likes:newCount})
    }
   
    render() {
        return (
            <div>
                <button onClick={this.addLike}>{this.state.likes}:Likes</button>
            </div>
        )
    }
}

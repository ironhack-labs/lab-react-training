import React, { Component } from 'react';

class LikeButton extends Component {
    state = {
        likes: 0
    }

    incrementLikes = () => {
        this.setState({likes: this.state.likes+1});
    }

    render() {
        return (
            <button className="like-button" onClick={this.incrementLikes}>
                {this.state.likes} Likes
            </button>
        );
    }
}

export default LikeButton;
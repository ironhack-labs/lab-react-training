import React, { Component } from "react";

class LikeButton extends Component {
    state = {
        numberOfLikes: 0
    };

    handleClick = () => {
        let { numberOfLikes } = this.state;
        numberOfLikes++
        this.setState({ numberOfLikes })
    };

    render () {
        const { numberOfLikes } = this.state;

        return (
            <button onClick={this.handleClick}>{ numberOfLikes } likes</button>
        )
    }
}

export default LikeButton
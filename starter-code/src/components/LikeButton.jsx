import React from "react";

class LikeButton extends React.Component {
    state = {
        numberOfLikes: 0
    }

    handleClick = () => {
        this.setState({
            numberOfLikes: this.state.numberOfLikes + 1
        })
    };

    render() {
        return (
            <button onClick={this.handleClick}>{this.state.numberOfLikes} likes</button>
        );
    }
}

export default LikeButton;
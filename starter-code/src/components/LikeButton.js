
import React, { Component } from 'react';


class LikeButton extends Component {
    state = {
        clickCount: 0
    };

    buttonClick = () => {
        this.setState({
            clickCount: this.state.clickCount + 1
        });
    };

    render() {
        // ...
        return (
            <div>
                <button onClick={this.buttonClick}>{this.state.clickCount} Likes</button>
            </div>
        );
    }
}

export default LikeButton;
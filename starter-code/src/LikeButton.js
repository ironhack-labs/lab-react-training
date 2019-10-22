import React, { Component } from "react";

const color = ['purple', 'blue', 'green', 'yellow', 'orange', 'red']

class LikeButton extends Component {
    state = {
        clickCount: 0,
        backColor: "white"
    };

    clickHandler = () => {
        this.setState({
            clickCount: this.state.clickCount + 1,
            backColor: color[Math.floor(Math.random() * color.length)]
        });
    };

    render() {
        return (
            <div className="App">
                <button onClick={this.clickHandler} style={{ backgroundColor: this.state.backColor }}>{this.state.clickCount} Likes</button>
            </div>
        );
    }
}

export default LikeButton;
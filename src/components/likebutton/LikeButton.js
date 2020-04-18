import React, { Component } from 'react';


class LikeButton extends Component {
    
    state = {
        counter: 0,
        index: 0
    }

    handleClick = () => {
        this.setState(
            {counter : this.state.counter + 1,
            index : this.state.index === this.colors.length-1 ? 0 : this.state.index + 1 }
        )

    }

    colors = ['purple','blue','green','yellow','orange','red'];

    render() {
        return (
            <button style={{backgroundColor : this.colors[this.state.index]}} onClick={this.handleClick}>{this.state.counter} likes</button>
        );
    }
};
    
export default LikeButton;
import React, { Component } from 'react'

export default class LikeButton extends Component {

    state = {
        count: 0,
        bgColor: ['purple','blue','green','orange','yellow','red'],
        selectedColor: ""
    };

    handleIncrement = () => {
        let item = this.state.bgColor[Math.floor(Math.random()*this.state.bgColor.length)];
        this.setState({ count: this.state.count + 1, selectedColor: item });
    }
    render() {
        return (
            <div>
                <button style={{ backgroundColor: this.state.selectedColor }} onClick={this.handleIncrement}>{this.state.count} Likes</button>
            </div>
        )
    }
}

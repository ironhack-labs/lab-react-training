import React, { Component } from 'react'

export default class LikeButton extends Component {
    constructor(props) {
        super(props)
        this.state = {
            value: 0,
            bGColors: ['purple', 'blue', 'green', 'yellow', 'orange', 'red'],
            colorIdx: 0
        }
    }

    addLike = () => {
        const bGColorConfirm = this.state.colorIdx === this.state.bGColors.length - 1;
        this.setState(({ value, colorIdx }) => ({
          value: value + 1,
          colorIdx: bGColorConfirm ? 0 : colorIdx + 1,
        }));
    }
    style = () => { 
        return { backgroundColor: this.state.bGColors[this.state.colorIdx] };
    }
    render() {
        return (
            <button 
                onClick={this.addLike}
                className="like-button"
                style={this.style()}
                >
                {this.state.value} Likes
                </button>
        )
    }
}

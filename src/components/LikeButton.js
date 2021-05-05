import React, { Component } from 'react';

export default class LikeButton extends Component {
    state = {
        counter: 0,
        color: 0
    }
    colors = ['purple','blue','green','yellow','orange','red']

    likeHandler = () => {
        this.setState((state) => {
            if (state.color === this.colors.length - 1) {
                return {
                    color: 0,
                    counter: state.counter + 1
                }
            }
            else {
                return {
                    color: state.color + 1,
                    counter: state.counter + 1
                }
            }
        })

    }
    render() {
        return (
            <button onClick={this.likeHandler} style={{backgroundColor: this.colors[this.state.color]}}>
                {this.state.counter} Likes
            </button>
        )
    }
}


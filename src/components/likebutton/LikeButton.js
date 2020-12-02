import React, { Component } from 'react';

export default class LikeButton extends Component {

    state = {
        likes: 0,
        color: 0,
    }

    clickHandler = () => {
        const backgroundColor = ['purple','blue','green','yellow','orange','red'];
        this.setState((state) => ({ 
            likes: state.likes + 1, 
            color: backgroundColor[state.likes]
        }))
    }

    render() {
        return (
            <div >
                <button onClick={this.clickHandler} style={{backgroundColor: `${this.state.color}`}}>{this.state.likes} Likes</button>
            </div>
        )
    }
}


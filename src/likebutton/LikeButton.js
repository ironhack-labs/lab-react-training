import React, { Component } from 'react'

export default class LikeButton extends Component {
    state = {
        counter: 0,
        colors: ['purple', 'blue', 'green', 'yellow', 'orange', 'red'],
        currentColor: 0
    }

    increment = () => {
        this.setState({
            counter: this.state.counter + 1,
            currentColor: this.state.currentColor < 5 ? this.state.currentColor + 1 : 0
        })
    }

    render() {
        return (
            <div>
                <button style={{ backgroundColor: this.state.colors[this.state.currentColor] }} onClick={this.increment}>{this.state.counter} likes </button>
            </div>
        )
    }
}
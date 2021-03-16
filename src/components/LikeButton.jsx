import React, { Component } from 'react'

export default class LikeButton extends Component {


    state = {
        counter: 0,
        colors: ['purple','blue','green','yellow','orange','red'],
        currentColor: 0
    }

    increment = () => {
        this.setState({counter: this.state.counter+1, currentColor: (this.state.currentColor+1)%6}) ;
    }

    render() {
        console.log(this.state.currentColor)
        return (
            <div>
                <button 
                    onClick={this.increment}
                    style={{backgroundColor: this.state.colors[this.state.currentColor]}}
                >
                    {this.state.counter} {this.state.counter > 1 ? "likes" : "like"}
                </button>
            </div>
        )
    }
}

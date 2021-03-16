import React, { Component } from 'react'

export default class LikeButton extends Component {
    background = ['purple','blue','green','yellow','orange','red']
    randomBackground = this.background[Math.floor(Math.random()*this.background.length)]

    state={
        counter: 0,
        backgroundColor : this.randomBackground
    }


    handleIncrement=()=>{
        this.randomBackground = this.background[Math.floor(Math.random()*this.background.length)]
        console.log()
        this.setState({ counter: this.state.counter + 1 });
        this.setState({ backgroundColor: this.randomBackground });

    }


    render() {
        return (
            <div>
                <button style={this.state} onClick={this.handleIncrement}>{this.state.counter} Likes</button>
            </div>
        )
    }
}

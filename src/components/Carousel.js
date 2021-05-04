import React, { Component } from 'react'

export default class Carousel extends Component {
    state = {
        index: 0
    }

    leftImage = () => {
        if (this.state.index <= 0) {
            this.setState({
                index: this.props.imgs.length-1
            })
        } else {
            this.setState((state) => ({
                index: state.index - 1
            }))
        }
    }

    rightImage = () => {
        if (this.state.index >= this.props.imgs.length-1){
            this.setState({
                index: 0
            })
        } else {
            this.setState((state) => ({
                index: state.index + 1
            }))
        }
    }
    
    render() {
        return (
            <div>
                <button onClick={this.leftImage}>Left</button>
                <img src={this.props.imgs[this.state.index]} alt="random person"></img>
                <button onClick={this.rightImage}>Right</button>
            </div>
        )
    }
}

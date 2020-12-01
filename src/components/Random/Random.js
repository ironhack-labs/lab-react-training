import React, { Component } from 'react'

export default class Random extends Component {

    randomHandler = (min, max) => {
        const randValue = Math.floor(Math.random() * (max - min) + min)
        return randValue
    }
    
    render() {
        return (
            <div>
                Random value between {this.props.min} and {this.props.max} is {this.randomHandler(this.props.min, this.props.max)}
            </div>
        )
    }
}

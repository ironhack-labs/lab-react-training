import React, { Component } from 'react'

export default class Random extends Component {

    render() {
        let randomNum = this.props.min + Math.floor(Math.random() * (this.props.max - this.props.min +1))
        return (
            <div>
                <p>Random Number between {this.props.min} and {this.props.max} => {randomNum}</p>
            </div>
        )
    }
}
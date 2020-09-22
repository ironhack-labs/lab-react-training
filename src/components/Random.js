import React, { Component } from 'react'

export default class Random extends Component {
    render() {
        const randomNumber = Math.floor(Math.random() * this.props.max) + this.props.min
        return (
            <div>
        <h2>Random value between {this.props.min} and {this.props.max} = {randomNumber}</h2>
            </div>
        )
    }
}

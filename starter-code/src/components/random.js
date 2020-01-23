import React, { Component } from 'react'

export default class Random extends Component {
    render() {
        var randomNumber = Math.floor(Math.random()*(this.props.max-this.props.min)) + this.props.min
        return (
            <div>
                <p>Random Value between {this.props.min} and {this.props.max} => {randomNumber}</p>
            </div>
        )
    }
}

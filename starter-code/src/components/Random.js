import React, { Component } from 'react'

export default class Random extends Component {
    render() {
        return (
            <div>
                <p>Random value between {this.props.min} and {this.props.max} => {Math.floor(Math.random() * (this.props.min - this.props.max) + this.props.max)}</p>
            </div>
        )
    }
}

import React, { Component } from 'react'

export default class Random extends Component {
    render() {
        let random = this.props.min + Math.floor(Math.random() * (this.props.max-this.props.min+1))
        return (
            <div className="random box">
                {this.props.min} and {this.props.max} results in {random}
            </div>
        )
    }
}

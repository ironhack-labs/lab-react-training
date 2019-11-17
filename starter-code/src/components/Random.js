import React, { Component } from 'react'

export default class Random extends Component {
    random = Math.floor(Math.random()* this.props.max)

    render() {
        return (
            <div className="col-10 box">
                Random value between {this.props.min} and {this.props.max} => {this.random}
            </div>
        )
    }
}

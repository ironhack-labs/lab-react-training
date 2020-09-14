import React, { Component } from "react"

class Random extends Component {
    render() {
        const random = Math.floor(Math.random() * (this.props.max + 1 - this.props.min) + this.props.min)
        return (
            <p>Random value between {this.props.min} and {this.props.max} = {random}</p>
        )
    }
}

export default Random
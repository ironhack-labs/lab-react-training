import React, { Component } from 'react';

export default class BoxColor extends Component {
    render() {
        const color = {
            "background-color": `rgb(${this.props.r}, ${this.props.g}, ${this.props.b})`,
            "border-color": "black"
        }
        return (
            <div style={color}>
                rgb({this.props.r}, {this.props.g}, {this.props.b})
            </div >
        )
    }
}
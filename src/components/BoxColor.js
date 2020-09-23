import React, { Component } from 'react';

export default class BoxColor extends Component {
    render() {
        const color = {
            "background-color": `rgb(${this.props.r}, ${this.props.g}, ${this.props.b})`,
            "border-color": "black"
        }
        function hexLetter(num) {
            let hexa = ["A", "B", "C", "D", "E", "F"];
            (num > 9) ? num = hexa[(num - 10)] : num;
            return num;
        }

        function hexFormat(item) {
            let str = hexLetter(Math.floor(item / 16)) + hexLetter(item % 16);
            return str;
        }

        return (
            <div style={color}>
                <p>rgb({this.props.r}, {this.props.g}, {this.props.b})</p>
                <p>#{hexFormat(this.props.r)}{hexFormat(this.props.g)}{hexFormat(this.props.b)}</p>
            </div >
        )
    }
}
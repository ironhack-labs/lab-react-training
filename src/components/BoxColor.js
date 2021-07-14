import React, { Component } from 'react'
import "../css/idCard.css"
export default class BoxColor extends Component {
    render() {
        const color = `rgb(${this.props.r},${this.props.g},${this.props.b})`
        const styling = {backgroundColor: color, width: "100px", border: "3px"}

        return (
            <div className = "greetings" style = {styling}>
                <p> {this.props.r} {this.props.g} {this.props.b} </p>
            </div>
        )}}
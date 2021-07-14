import React, { Component } from 'react'
import "../css/idCard.css"
export default class Random extends Component {
    render() {
        let random = Math.floor(Math.random() * this.props.max) + this.props.min;
        return (
            <div className = "greetings">
                <p>{random}</p>
            </div>
        )}}
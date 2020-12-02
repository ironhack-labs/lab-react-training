import React, { Component } from 'react'
import './Random.css'

export default class Random extends Component {
    render() {
        const randomNumber = 
        Math.floor(Math.random() * (this.props.max - this.props.min)) + this.props.min;
        console.log(this.props);
        return (
            <div className="random">
                <p>Random value between {this.props.min} and {this.props.max} => {randomNumber} </p>
            </div>
        )
    }
}

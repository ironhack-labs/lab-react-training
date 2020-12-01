import React, { Component } from 'react'
import './Random.css'

export default class Random extends Component {

    randomHandler = (min, max) => {
        const randomValue = Math.floor(Math.random() * (max - min) + min)
        return `Random value between ${min} and ${max} => ${randomValue}`
    }



    render() {
        return (
            <div className="randomContainer">
                <h1> {this.randomHandler(this.props.min, this.props.max)} </h1> 
            </div>
        )
    }
}

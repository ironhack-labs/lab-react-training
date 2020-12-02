import React, { Component } from 'react';
import './Random.css'

export default class Random extends Component {

    generate(min, max) {
        const random = Math.floor(Math.random() * (max - min)) + min
        return ` Random value between ${min} and ${max} => ${random}`
    }

    render() {
        return (
            <>
                <div className="border">
                    <h3>{this.generate(this.props.min, this.props.max)}</h3>
                </div>
            </>
        )
    }
}

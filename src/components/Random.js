import React, { Component } from 'react'

export default class Random extends React.Component {
    constructor(props) {
        super(props)
        this.state = { randomNumber: 0 }
    }

    static getDerivedStateFromProps(props, state) {
        const { max, min } = props
        const calRandom = (max - min + 1) + min
        const random = Math.floor(Math.random() * calRandom)
        return {
            randomNumber: random
        }
    }

    render() {
        return (
            <div>
                <p>Random Number between {this.props.min} and {this.props.max} => {this.state.randomNumber}</p>
            </div>
        )
    }
}
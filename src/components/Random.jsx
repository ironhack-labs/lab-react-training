import React, { Component } from 'react'

export default class Random extends Component {
    constructor(props) {
        super(props)
        this.state = {
            min: parseInt(props.min),
            max: parseInt(props.max),
            random: null
        }
    }
    countRandom = () => {
        console.log(this.state)
        this.setState({random: this.state.min + Math.floor((Math.random() * (this.state.max - this.state.min)))});
    }
    render() {
        return (
            <div className="text-in-border">
            <button onClick={this.countRandom}>Click me</button>
                Random number between {this.props.min} and {this.props.max} is {this.state.random}
            </div>
        )
    }
}

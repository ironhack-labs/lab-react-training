import React, { Component } from "react";

class Random extends Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props)
    }

    getRandomNumber() {
        let min = this.props.min
        let max = this.props.max

        return Math.floor(Math.random() * max) + min 
    }

    render () {
        return (
            <div className="card border">
                <p>Random value between {this.props.min} and {this.props.max} => {this.getRandomNumber()}</p>
            </div>
        )
    }
}

export default Random
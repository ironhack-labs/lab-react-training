import React, { Component } from "react";

//IT.3
class Random extends Component {

    getRandomIntInclusive(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    render() {
        const {min, max} = this.props
        return (
            <div>
                <p>Random value between {min} and {max} => {this.getRandomIntInclusive(this.props.min, this.props.max)}</p>
            </div>
        )
    }
}

export default Random; 
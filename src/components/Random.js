import React, { Component } from 'react';

class Random extends Component {

    getRandomIntInclusive(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive
    }

    render() {
        return (
            <div>
                <p>Random value between {this.props.min} and {this.props.max} => {this.getRandomIntInclusive(this.props.min, this.props.max)}</p>
            </div>
        )
    }
}

export default Random;
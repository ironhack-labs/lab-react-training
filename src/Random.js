import React, { Component } from 'react'

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
  }

class Random extends Component {
    render() {
        let randomNumber = getRandomInt(this.props.min, this.props.max);
        return (
            <div className='borderWrapper'>
                <p>Random value between {this.props.min} and {this.props.max} => {randomNumber}</p>
            </div>
        )
    }
}

export default Random

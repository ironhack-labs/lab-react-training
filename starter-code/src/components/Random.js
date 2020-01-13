import React, { Component } from 'react';



class Random extends Component {
    getRandomArbitrary = (min, max) => {
        return Math.round(Math.random() * (max - min) + min);
      }

    render() {
        return (
            <div>
                <p>Random value between {this.props.min} and {this.props.max} => {this.getRandomArbitrary(this.props.min, this.props.max)} </p>
            </div>
        )
    }
}


export default Random
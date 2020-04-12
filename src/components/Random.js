import React, { Component } from 'react';
import './Random.css';

class Random extends Component {
    render() {

    let result = Math.random() * (this.props.max - this.props.min) + this.props.min;
    result = Math.round(result);

    return <p className='container content'>Random value between {this.props.min} and {this.props.max} => {result}</p>;
    }
}

export default Random;
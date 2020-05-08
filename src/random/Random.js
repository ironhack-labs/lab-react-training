import React from 'react';
import './Random.css'

class Random extends React.Component {
    render() {
        const min = Math.ceil(this.props.min);
        const max = Math.floor(this.props.max);
        const result = Math.floor(Math.random() * (max - min + 1)) + min;
        return <h1 className="random">Randon value between {this.props.min} and {this.props.max} => {result}</h1>
    }
}

export default Random;

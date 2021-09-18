import React, {Component} from 'react';
import './Random.css';

class Random extends Component {
    render () {
        let randomNumber = () => (
            Math.floor(Math.random() * (this.props.max - (this.props.min + 1)) + this.props.min)
        )
        return (
            <div className="random">
                <p>Random value between {this.props.min} and {this.props.max} = {randomNumber()}</p>
            </div>
        )
    }
}

export default Random;
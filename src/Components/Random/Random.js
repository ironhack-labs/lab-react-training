import React, {Component} from 'react';
import './Random.css';

class Random extends Component {
    render(){
        const {min, max} = this.props;
        const number = () => (
            Math.floor(Math.random() * (max - (min + 1)) + min)
        );
        const arrow = '=>'

        return (
            <div className="random">
                <p>
                    Random value between {min} and {max} {arrow} {number()}
                </p>
            </div>
        );
    }
}

export default Random;
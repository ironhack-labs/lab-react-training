import React from 'react';
import './random.css';

class Random extends React.Component {
    render() {
        let num = Math.floor(Math.random()*this.props.max)+(this.props.min);
        return (
            <div className="rand">
                {num}
            </div>
        );
    }
}
export default Random;
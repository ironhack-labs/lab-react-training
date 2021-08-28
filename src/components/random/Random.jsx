import React from 'react';
import "./Random.css";

export default class Random extends React.Component {
    render() {
    const min = this.props.min;
    const max = this.props.max;
    let randomNumber = Math.floor(Math.random() * (max - min + 1) + min);
    return (
        <div className="Random">
             <p>
             Random value between {min} and {max} = {randomNumber}
             </p>
        </div>
    );
    }
}
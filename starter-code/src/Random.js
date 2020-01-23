import React, { Component } from 'react';
import "./index.css";

class Random extends Component {
    render(){
        let randomOne = Math.floor(Math.random() * this.props.max) + this.props.min;
        return (
            <div className="image">
                <span>Random value between {this.props.min} and {this.props.max} => {randomOne}</span>
            </div>
        )
    }
}

export default Random;
import React, { Component } from 'react';
import './BoxColor.css';

export default class BoxColor extends Component {
    render() {
        console.log(this.props);
        
        const style = {
            color: this.props.fontColor,
            backgroundColor: `rgb(${this.props.r}, ${this.props.g}, ${this.props.b})`
        };

        return (
            <div className="boxcolor" style={style}>
                <p className="centered">rgb({this.props.r}, {this.props.g}, {this.props.b})</p>
            </div>
        )
    }
}


